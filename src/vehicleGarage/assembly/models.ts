import { context, PersistentSet, storage } from "near-sdk-as"
import { AccountId, Timestamp, VEHICLE_GARAGE_KEY } from "../../utils";

@nearBindgen
export class VehicleGarage {
  created_at: Timestamp = context.blockTimestamp;

  constructor(public name: string) {}

  // ----------------------------------------------------------------------------
  // Basic functions
  // ----------------------------------------------------------------------------

  static create(name: string, new_owners: AccountId[]): void {
    assert(name.length > 0, "VehicleGarage name may not be blank")

    // save the meme to storage
    this.set(new VehicleGarage(name))

    // capture owners
    for (let i = 0; i < new_owners.length; i++) {
      owners.add(new_owners[i])
    }
  }

  static get(): VehicleGarage {
    return storage.getSome<VehicleGarage>(VEHICLE_GARAGE_KEY)
  }

  static set(vehicle: VehicleGarage): void {
    storage.set(VEHICLE_GARAGE_KEY, vehicle)
  }

  // ----------------------------------------------------------------------------
  // Vehicles
  // ----------------------------------------------------------------------------

  static add_vehicle(accountId: AccountId): void {
    vehicles.add(accountId)
  }

  static remove_vehicle(accountId: AccountId): void {
    vehicles.delete(accountId)
  }

  static has_vehicle(accountId: AccountId): bool {
    return vehicles.has(accountId)
  }

  static get_vehicle_list(): string[] {
    return vehicles.values()
  }

  static get_vehicle_count(): u32 {
    return vehicles.size
  }

  
  // ----------------------------------------------------------------------------
  // Owners
  // ----------------------------------------------------------------------------

  static add_owner(account: AccountId): void {
    owners.add(account)
  }

  static remove_owner(account: AccountId): void {
    owners.delete(account)
  }

  static has_owner(account: AccountId): bool {
    return owners.has(account)
  }

  static get_owner_list(): AccountId[] {
    return owners.values()
  }
}

const vehicles = new PersistentSet<AccountId>("v")
const owners = new PersistentSet<AccountId>("o")
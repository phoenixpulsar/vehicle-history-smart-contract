
import { VehicleId, VehicleServiceId, AccountId, Money, Timestamp, idCreator, GARAGE_KEY } from "../../utils";
import { VehicleGarage } from "./models";


export function init(): void {
  // make asserstions here
  VehicleGarage.create_garage()
}

export function get_vehicle_garage(): VehicleGarage {
  // make asserstions here
  return VehicleGarage.get_garage()
}

export function add_vehicle(year:string, make:string,  model:string,  owner:AccountId, vehicleNotes:string, dateAcquired:string): void {
  // make asserstions here
  VehicleGarage.add_vehicle(year, make, model, owner, vehicleNotes, dateAcquired)
}

export function update_vehicle(vehicleId: VehicleId, year:string, make:string,  model:string,  owner:AccountId, vehicleNotes:string, dateAcquired:string): void {
  // make asserstions here
  VehicleGarage.update_vehicle(vehicleId, year, make, model, owner, vehicleNotes, dateAcquired)
}

export function delete_vehicle(vehicleId: VehicleId): void{
  // make asserstions here
  VehicleGarage.delete_vehicle(vehicleId)
}

export function add_vehicle_service(vehicleId:VehicleId, serviceDate:string, serviceNotes:string): void {
  // make asserstions here
  VehicleGarage.add_vehicle_service(vehicleId, serviceDate, serviceNotes)
}

export function update_vehicle_service(vehicleServiceId: VehicleServiceId, vehicleId:VehicleId, serviceDate:string, serviceNotes:string): void {
  // make asserstions here
  VehicleGarage.update_vehicle_service(vehicleServiceId, vehicleId, serviceDate, serviceNotes)
}

export function delete_vehicle_service(vehicleServiceId: VehicleServiceId):void {
  // make asserstions here
  VehicleGarage.delete_vehicle_service(vehicleServiceId)
}






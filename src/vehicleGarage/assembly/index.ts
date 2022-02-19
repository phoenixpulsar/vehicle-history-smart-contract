import { ContractPromiseBatch, context, base58, u128, env, storage, logging, ContractPromise } from "near-sdk-as"
import { MIN_ACCOUNT_BALANCE, AccountId,  VEHICLE_GARAGE_KEY, XCC_GAS } from "../../utils";
import { VehicleGarage } from "./models";

// import vehicle contract bytecode as StaticArray
const CODE = includeBytes("../../../build/release/vechicle.wasm")

export function init(name: string, owners: AccountId[]): void {
    // contract may only be initialized once
    assert(!is_initialized(), "Contract is already initialized.");

    // storing meme metadata requires some storage staking (balance locked to offset cost of data storage)
    assert(
        u128.ge(context.attachedDeposit, MIN_ACCOUNT_BALANCE),
        "Minimum account balance must be attached to initialize this contract (3 NEAR)"
    );

    // Must have least 1 owner account
    assert(owners.length > 0, "Must specify at least 1 owner");

    // create the VehicleGarage using incoming metadata
    VehicleGarage.create(name, owners)

    logging.log("VehicleGarage was created")
}

/**
 * Add your Vehicle
 */
 export function add_meme(
    // meme: AccountId,
    // title: string,
    // data: string,
  ): void {
    assert_contract_is_initialized()
    // assert_signed_by_contributor_or_owner()
  
    // storing vehicle metadata requires some storage staking (balance locked to offset cost of data storage)
    // assert(
    //   u128.ge(context.attachedDeposit, MIN_ACCOUNT_BALANCE),
    //   "Minimum account balance must be attached to initialize a meme (3 NEAR)"
    // );
  
    // const accountId = full_account_for(meme)
  
    // assert(env.isValidAccountID(accountId), "Meme name must be valid NEAR account name")
    // assert(!Museum.has_meme(accountId), "Meme name already exists")
  
    // logging.log("attempting to create meme")
  
    // let promise = ContractPromiseBatch.create(accountId)
    //   .create_account()
    //   .deploy_contract(Uint8Array.wrap(changetype<ArrayBuffer>(CODE)))
    //   .add_full_access_key(base58.decode(context.senderPublicKey))
  
    // promise.function_call(
    //   "init",
    //   new MemeInitArgs(title, data, category),
    //   context.attachedDeposit,
    //   XCC_GAS
    // )
  
    // promise.then(context.contractName).function_call(
    //   "on_meme_created",
    //   new MemeNameAsArg(meme),
    //   u128.Zero,
    //   XCC_GAS
    // )
  }


/**
 * == PRIVATE FUNCTIONS ========================================================
 *
 * Helper functions that are not part of the contract interface
 */

/**
 * Track whether or not the meme has been initialized.
 */

function is_initialized(): bool {
    return storage.hasKey(VEHICLE_GARAGE_KEY);
}
  
function assert_contract_is_initialized(): void {
    assert(is_initialized(), "Contract must be initialized first.");
}



import {
  Account,
  transactions,
  providers,
  DEFAULT_FUNCTION_CALL_GAS,
  u8,
  i8,
  u16,
  i16,
  u32,
  i32,
  u64,
  i64,
  f32,
  f64,
  BN,
  ChangeMethodOptions,
  ViewFunctionOptions,
} from './helper';

/**
* StorageUsage is used to count the amount of storage used by a contract.
*/
export type StorageUsage = u64;
/**
* Balance is a type for storing amounts of tokens, specified in yoctoNEAR.
*/
export type Balance = U128;
/**
* Represents the amount of NEAR tokens in "gas units" which are used to fund transactions.
*/
export type Gas = u64;
/**
* base64 string.
*/
export type Base64VecU8 = string;
/**
* Raw type for duration in nanoseconds
*/
export type Duration = u64;
/**
* @minLength 2
* @maxLength 64
* @pattern ^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$
*/
export type AccountId = string;
/**
* @minLength 2
* @maxLength 64
* @pattern ^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$
*/
export type ValidAccountId = string;
/**
* String representation of a u128-bit integer
* @pattern ^[0-9]+$
*/
export type U128 = string;
/**
* Public key in a binary format with base58 string serialization with human-readable curve.
* The key types currently supported are `secp256k1` and `ed25519`.
* 
* Ed25519 public keys accepted are 32 bytes and secp256k1 keys are the uncompressed 64 format.
*/
export type PublicKey = string;
/**
* Raw type for timestamp in nanoseconds
*/
export type Timestamp = u64;
export type Kind = KindOk | KindFail;
export interface KindOk {
  tag: "ok",
  val: KindOk,
}
export interface KindFail {
  tag: "fail",
  val: KindFail,
}
export interface KindOk {
  code: u8;
}
export interface KindFail {
  code: u8;
  text: string;
}
export interface Config {
  number: u16;
  kind: Kind;
}

export class Contract {
  
  constructor(public account: Account, public readonly contractId: string){}
  
  async init(args = {}, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.initRaw(args, options));
  }
  initRaw(args = {}, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "init", args, ...options});
  }
  initTx(args = {}, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("init", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  get_age(args = {}, options?: ViewFunctionOptions): Promise<u8> {
    return this.account.viewFunction(this.contractId, "get_age", args, options);
  }
  get_name(args = {}, options?: ViewFunctionOptions): Promise<string> {
    return this.account.viewFunction(this.contractId, "get_name", args, options);
  }
  get_kind(args = {}, options?: ViewFunctionOptions): Promise<Kind | null> {
    return this.account.viewFunction(this.contractId, "get_kind", args, options);
  }
  async update_age(args: {
    age: u8;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.update_ageRaw(args, options));
  }
  update_ageRaw(args: {
    age: u8;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "update_age", args, ...options});
  }
  update_ageTx(args: {
    age: u8;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("update_age", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
}
/**
* 
* @contractMethod change
*/
export interface Init {
  args: {};
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type Init__Result = void;
/**
* 
* @contractMethod view
*/
export interface GetAge {
  args: {};
  
}
export type GetAge__Result = u8;
/**
* 
* @contractMethod view
*/
export interface GetName {
  args: {};
  
}
export type GetName__Result = string;
/**
* 
* @contractMethod view
*/
export interface GetKind {
  args: {};
  
}
export type GetKind__Result = Kind | null;
/**
* 
* @contractMethod change
*/
export interface UpdateAge {
  args: {
    age: u8;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type UpdateAge__Result = void;

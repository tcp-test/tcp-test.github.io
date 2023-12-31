/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface DataToChainInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getParentAddress"
      | "getUpChainAmount"
      | "isUp"
      | "owner"
      | "store"
      | "userIdMapAddress"
      | "userInfos"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getParentAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpChainAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isUp",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "userIdMapAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfos",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getParentAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpChainAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userIdMapAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfos", data: BytesLike): Result;
}

export interface DataToChain extends BaseContract {
  connect(runner?: ContractRunner | null): DataToChain;
  waitForDeployment(): Promise<this>;

  interface: DataToChainInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getParentAddress: TypedContractMethod<
    [userAddress: AddressLike],
    [string],
    "view"
  >;

  getUpChainAmount: TypedContractMethod<
    [userAddress: AddressLike],
    [bigint],
    "view"
  >;

  isUp: TypedContractMethod<
    [userAddress: AddressLike, userId: BigNumberish],
    [[boolean, boolean]],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  store: TypedContractMethod<
    [
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  userIdMapAddress: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  userInfos: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        userId: bigint;
        parentId: bigint;
        lockeBalance: bigint;
        assetsBalance: bigint;
        changeBalance: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getParentAddress"
  ): TypedContractMethod<[userAddress: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getUpChainAmount"
  ): TypedContractMethod<[userAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isUp"
  ): TypedContractMethod<
    [userAddress: AddressLike, userId: BigNumberish],
    [[boolean, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "store"
  ): TypedContractMethod<
    [
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "userIdMapAddress"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "userInfos"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        userId: bigint;
        parentId: bigint;
        lockeBalance: bigint;
        assetsBalance: bigint;
        changeBalance: bigint;
      }
    ],
    "view"
  >;

  filters: {};
}

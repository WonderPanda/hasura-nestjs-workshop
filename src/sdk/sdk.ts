import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: string;
  timestamptz: string;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginOrRegisterUserOutput = {
  __typename?: 'LoginOrRegisterUserOutput';
  error: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};

export type LoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PurchasedItemResult = {
  __typename?: 'PurchasedItemResult';
  error: Maybe<Scalars['String']>;
  itemId: Maybe<Scalars['Float']>;
  remainingCoins: Maybe<Scalars['Float']>;
  secret: Maybe<Scalars['String']>;
};

export type RegisterUserArgs = {
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['citext']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['citext']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['citext']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['citext']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['citext']>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  cost: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  purchases: Array<Purchases>;
  /** An aggregate relationship */
  purchases_aggregate: Purchases_Aggregate;
  secret: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};


/** columns and relationships of "items" */
export type ItemsPurchasesArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsPurchases_AggregateArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  avg: Maybe<Items_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Items_Max_Fields>;
  min: Maybe<Items_Min_Fields>;
  stddev: Maybe<Items_Stddev_Fields>;
  stddev_pop: Maybe<Items_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Items_Stddev_Samp_Fields>;
  sum: Maybe<Items_Sum_Fields>;
  var_pop: Maybe<Items_Var_Pop_Fields>;
  var_samp: Maybe<Items_Var_Samp_Fields>;
  variance: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Items_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  avg?: Maybe<Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
  stddev?: Maybe<Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Items_Sum_Order_By>;
  var_pop?: Maybe<Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Items_Var_Samp_Order_By>;
  variance?: Maybe<Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "items" */
export type Items_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Items_Bool_Exp>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Items_Bool_Exp>>;
  cost?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  purchases?: Maybe<Purchases_Bool_Exp>;
  secret?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing numeric columns in table "items" */
export type Items_Inc_Input = {
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  purchases?: Maybe<Purchases_Arr_Rel_Insert_Input>;
  secret?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  secret: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  secret: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  purchases_aggregate?: Maybe<Purchases_Aggregate_Order_By>;
  secret?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Secret = 'secret',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "items" */
export type Items_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "items" */
export type Items_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "items" */
export type Items_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  cost: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "items" */
export type Items_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Secret = 'secret',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "items" */
export type Items_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "items" */
export type Items_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "items" */
export type Items_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "items" */
  delete_items: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk: Maybe<Items>;
  /** delete data from the table: "public_items" */
  delete_public_items: Maybe<Public_Items_Mutation_Response>;
  /** delete data from the table: "purchases" */
  delete_purchases: Maybe<Purchases_Mutation_Response>;
  /** delete single row from the table: "purchases" */
  delete_purchases_by_pk: Maybe<Purchases>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "items" */
  insert_items: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one: Maybe<Items>;
  /** insert data into the table: "public_items" */
  insert_public_items: Maybe<Public_Items_Mutation_Response>;
  /** insert a single row into the table: "public_items" */
  insert_public_items_one: Maybe<Public_Items>;
  /** insert data into the table: "purchases" */
  insert_purchases: Maybe<Purchases_Mutation_Response>;
  /** insert a single row into the table: "purchases" */
  insert_purchases_one: Maybe<Purchases>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  login: Maybe<LoginOrRegisterUserOutput>;
  purchaseItem: PurchasedItemResult;
  registerUser: Maybe<LoginOrRegisterUserOutput>;
  /** update data of the table: "items" */
  update_items: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk: Maybe<Items>;
  /** update data of the table: "public_items" */
  update_public_items: Maybe<Public_Items_Mutation_Response>;
  /** update data of the table: "purchases" */
  update_purchases: Maybe<Purchases_Mutation_Response>;
  /** update single row of the table: "purchases" */
  update_purchases_by_pk: Maybe<Purchases>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Public_ItemsArgs = {
  where: Public_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PurchasesArgs = {
  where: Purchases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Purchases_By_PkArgs = {
  item_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Public_ItemsArgs = {
  objects: Array<Public_Items_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Public_Items_OneArgs = {
  object: Public_Items_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PurchasesArgs = {
  objects: Array<Purchases_Insert_Input>;
  on_conflict: Maybe<Purchases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Purchases_OneArgs = {
  object: Purchases_Insert_Input;
  on_conflict: Maybe<Purchases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  params: Maybe<LoginUserArgs>;
};


/** mutation root */
export type Mutation_RootPurchaseItemArgs = {
  itemId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRegisterUserArgs = {
  params: Maybe<RegisterUserArgs>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _inc: Maybe<Items_Inc_Input>;
  _set: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _inc: Maybe<Items_Inc_Input>;
  _set: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Public_ItemsArgs = {
  _inc: Maybe<Public_Items_Inc_Input>;
  _set: Maybe<Public_Items_Set_Input>;
  where: Public_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PurchasesArgs = {
  _inc: Maybe<Purchases_Inc_Input>;
  _set: Maybe<Purchases_Set_Input>;
  where: Purchases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Purchases_By_PkArgs = {
  _inc: Maybe<Purchases_Inc_Input>;
  _set: Maybe<Purchases_Set_Input>;
  pk_columns: Purchases_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc: Maybe<Users_Inc_Input>;
  _set: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc: Maybe<Users_Inc_Input>;
  _set: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "public_items" */
export type Public_Items = {
  __typename?: 'public_items';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** aggregated selection of "public_items" */
export type Public_Items_Aggregate = {
  __typename?: 'public_items_aggregate';
  aggregate: Maybe<Public_Items_Aggregate_Fields>;
  nodes: Array<Public_Items>;
};

/** aggregate fields of "public_items" */
export type Public_Items_Aggregate_Fields = {
  __typename?: 'public_items_aggregate_fields';
  avg: Maybe<Public_Items_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Public_Items_Max_Fields>;
  min: Maybe<Public_Items_Min_Fields>;
  stddev: Maybe<Public_Items_Stddev_Fields>;
  stddev_pop: Maybe<Public_Items_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Public_Items_Stddev_Samp_Fields>;
  sum: Maybe<Public_Items_Sum_Fields>;
  var_pop: Maybe<Public_Items_Var_Pop_Fields>;
  var_samp: Maybe<Public_Items_Var_Samp_Fields>;
  variance: Maybe<Public_Items_Variance_Fields>;
};


/** aggregate fields of "public_items" */
export type Public_Items_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Public_Items_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Public_Items_Avg_Fields = {
  __typename?: 'public_items_avg_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "public_items". All fields are combined with a logical 'AND'. */
export type Public_Items_Bool_Exp = {
  _and?: Maybe<Array<Public_Items_Bool_Exp>>;
  _not?: Maybe<Public_Items_Bool_Exp>;
  _or?: Maybe<Array<Public_Items_Bool_Exp>>;
  cost?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "public_items" */
export type Public_Items_Inc_Input = {
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "public_items" */
export type Public_Items_Insert_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Public_Items_Max_Fields = {
  __typename?: 'public_items_max_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Public_Items_Min_Fields = {
  __typename?: 'public_items_min_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "public_items" */
export type Public_Items_Mutation_Response = {
  __typename?: 'public_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Public_Items>;
};

/** Ordering options when selecting data from "public_items". */
export type Public_Items_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "public_items" */
export enum Public_Items_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "public_items" */
export type Public_Items_Set_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Public_Items_Stddev_Fields = {
  __typename?: 'public_items_stddev_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Public_Items_Stddev_Pop_Fields = {
  __typename?: 'public_items_stddev_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Public_Items_Stddev_Samp_Fields = {
  __typename?: 'public_items_stddev_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Public_Items_Sum_Fields = {
  __typename?: 'public_items_sum_fields';
  cost: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Public_Items_Var_Pop_Fields = {
  __typename?: 'public_items_var_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Public_Items_Var_Samp_Fields = {
  __typename?: 'public_items_var_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Public_Items_Variance_Fields = {
  __typename?: 'public_items_variance_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "purchases" */
export type Purchases = {
  __typename?: 'purchases';
  /** An object relationship */
  item: Items;
  item_id: Scalars['Int'];
  purchase_cost: Scalars['Int'];
  purchased_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "purchases" */
export type Purchases_Aggregate = {
  __typename?: 'purchases_aggregate';
  aggregate: Maybe<Purchases_Aggregate_Fields>;
  nodes: Array<Purchases>;
};

/** aggregate fields of "purchases" */
export type Purchases_Aggregate_Fields = {
  __typename?: 'purchases_aggregate_fields';
  avg: Maybe<Purchases_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Purchases_Max_Fields>;
  min: Maybe<Purchases_Min_Fields>;
  stddev: Maybe<Purchases_Stddev_Fields>;
  stddev_pop: Maybe<Purchases_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Purchases_Stddev_Samp_Fields>;
  sum: Maybe<Purchases_Sum_Fields>;
  var_pop: Maybe<Purchases_Var_Pop_Fields>;
  var_samp: Maybe<Purchases_Var_Samp_Fields>;
  variance: Maybe<Purchases_Variance_Fields>;
};


/** aggregate fields of "purchases" */
export type Purchases_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Purchases_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "purchases" */
export type Purchases_Aggregate_Order_By = {
  avg?: Maybe<Purchases_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Purchases_Max_Order_By>;
  min?: Maybe<Purchases_Min_Order_By>;
  stddev?: Maybe<Purchases_Stddev_Order_By>;
  stddev_pop?: Maybe<Purchases_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Purchases_Stddev_Samp_Order_By>;
  sum?: Maybe<Purchases_Sum_Order_By>;
  var_pop?: Maybe<Purchases_Var_Pop_Order_By>;
  var_samp?: Maybe<Purchases_Var_Samp_Order_By>;
  variance?: Maybe<Purchases_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "purchases" */
export type Purchases_Arr_Rel_Insert_Input = {
  data: Array<Purchases_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Purchases_On_Conflict>;
};

/** aggregate avg on columns */
export type Purchases_Avg_Fields = {
  __typename?: 'purchases_avg_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "purchases" */
export type Purchases_Avg_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "purchases". All fields are combined with a logical 'AND'. */
export type Purchases_Bool_Exp = {
  _and?: Maybe<Array<Purchases_Bool_Exp>>;
  _not?: Maybe<Purchases_Bool_Exp>;
  _or?: Maybe<Array<Purchases_Bool_Exp>>;
  item?: Maybe<Items_Bool_Exp>;
  item_id?: Maybe<Int_Comparison_Exp>;
  purchase_cost?: Maybe<Int_Comparison_Exp>;
  purchased_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "purchases" */
export enum Purchases_Constraint {
  /** unique or primary key constraint */
  PurchasesPkey = 'purchases_pkey'
}

/** input type for incrementing numeric columns in table "purchases" */
export type Purchases_Inc_Input = {
  item_id?: Maybe<Scalars['Int']>;
  purchase_cost?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "purchases" */
export type Purchases_Insert_Input = {
  item?: Maybe<Items_Obj_Rel_Insert_Input>;
  item_id?: Maybe<Scalars['Int']>;
  purchase_cost?: Maybe<Scalars['Int']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Purchases_Max_Fields = {
  __typename?: 'purchases_max_fields';
  item_id: Maybe<Scalars['Int']>;
  purchase_cost: Maybe<Scalars['Int']>;
  purchased_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "purchases" */
export type Purchases_Max_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Purchases_Min_Fields = {
  __typename?: 'purchases_min_fields';
  item_id: Maybe<Scalars['Int']>;
  purchase_cost: Maybe<Scalars['Int']>;
  purchased_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "purchases" */
export type Purchases_Min_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "purchases" */
export type Purchases_Mutation_Response = {
  __typename?: 'purchases_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Purchases>;
};

/** on conflict condition type for table "purchases" */
export type Purchases_On_Conflict = {
  constraint: Purchases_Constraint;
  update_columns?: Array<Purchases_Update_Column>;
  where?: Maybe<Purchases_Bool_Exp>;
};

/** Ordering options when selecting data from "purchases". */
export type Purchases_Order_By = {
  item?: Maybe<Items_Order_By>;
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: purchases */
export type Purchases_Pk_Columns_Input = {
  item_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** select columns of table "purchases" */
export enum Purchases_Select_Column {
  /** column name */
  ItemId = 'item_id',
  /** column name */
  PurchaseCost = 'purchase_cost',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "purchases" */
export type Purchases_Set_Input = {
  item_id?: Maybe<Scalars['Int']>;
  purchase_cost?: Maybe<Scalars['Int']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Purchases_Stddev_Fields = {
  __typename?: 'purchases_stddev_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "purchases" */
export type Purchases_Stddev_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Purchases_Stddev_Pop_Fields = {
  __typename?: 'purchases_stddev_pop_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "purchases" */
export type Purchases_Stddev_Pop_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Purchases_Stddev_Samp_Fields = {
  __typename?: 'purchases_stddev_samp_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "purchases" */
export type Purchases_Stddev_Samp_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Purchases_Sum_Fields = {
  __typename?: 'purchases_sum_fields';
  item_id: Maybe<Scalars['Int']>;
  purchase_cost: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "purchases" */
export type Purchases_Sum_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "purchases" */
export enum Purchases_Update_Column {
  /** column name */
  ItemId = 'item_id',
  /** column name */
  PurchaseCost = 'purchase_cost',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Purchases_Var_Pop_Fields = {
  __typename?: 'purchases_var_pop_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "purchases" */
export type Purchases_Var_Pop_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Purchases_Var_Samp_Fields = {
  __typename?: 'purchases_var_samp_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "purchases" */
export type Purchases_Var_Samp_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Purchases_Variance_Fields = {
  __typename?: 'purchases_variance_fields';
  item_id: Maybe<Scalars['Float']>;
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "purchases" */
export type Purchases_Variance_Order_By = {
  item_id?: Maybe<Order_By>;
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  health: Scalars['String'];
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk: Maybe<Items>;
  /** fetch data from the table: "public_items" */
  public_items: Array<Public_Items>;
  /** fetch aggregated fields from the table: "public_items" */
  public_items_aggregate: Public_Items_Aggregate;
  /** An array relationship */
  purchases: Array<Purchases>;
  /** An aggregate relationship */
  purchases_aggregate: Purchases_Aggregate;
  /** fetch data from the table: "purchases" using primary key columns */
  purchases_by_pk: Maybe<Purchases>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootItemsArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPublic_ItemsArgs = {
  distinct_on: Maybe<Array<Public_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Public_Items_Order_By>>;
  where: Maybe<Public_Items_Bool_Exp>;
};


export type Query_RootPublic_Items_AggregateArgs = {
  distinct_on: Maybe<Array<Public_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Public_Items_Order_By>>;
  where: Maybe<Public_Items_Bool_Exp>;
};


export type Query_RootPurchasesArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


export type Query_RootPurchases_AggregateArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


export type Query_RootPurchases_By_PkArgs = {
  item_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk: Maybe<Items>;
  /** fetch data from the table: "public_items" */
  public_items: Array<Public_Items>;
  /** fetch aggregated fields from the table: "public_items" */
  public_items_aggregate: Public_Items_Aggregate;
  /** An array relationship */
  purchases: Array<Purchases>;
  /** An aggregate relationship */
  purchases_aggregate: Purchases_Aggregate;
  /** fetch data from the table: "purchases" using primary key columns */
  purchases_by_pk: Maybe<Purchases>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Subscription_RootItemsArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPublic_ItemsArgs = {
  distinct_on: Maybe<Array<Public_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Public_Items_Order_By>>;
  where: Maybe<Public_Items_Bool_Exp>;
};


export type Subscription_RootPublic_Items_AggregateArgs = {
  distinct_on: Maybe<Array<Public_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Public_Items_Order_By>>;
  where: Maybe<Public_Items_Bool_Exp>;
};


export type Subscription_RootPurchasesArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


export type Subscription_RootPurchases_AggregateArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


export type Subscription_RootPurchases_By_PkArgs = {
  item_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  coins: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  display_name: Maybe<Scalars['String']>;
  email: Scalars['citext'];
  id: Scalars['Int'];
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  password_hash: Scalars['String'];
  /** An array relationship */
  purchases: Array<Purchases>;
  /** An aggregate relationship */
  purchases_aggregate: Purchases_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersItemsArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersItems_AggregateArgs = {
  distinct_on: Maybe<Array<Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Items_Order_By>>;
  where: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPurchasesArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPurchases_AggregateArgs = {
  distinct_on: Maybe<Array<Purchases_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Purchases_Order_By>>;
  where: Maybe<Purchases_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
  stddev: Maybe<Users_Stddev_Fields>;
  stddev_pop: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Users_Stddev_Samp_Fields>;
  sum: Maybe<Users_Sum_Fields>;
  var_pop: Maybe<Users_Var_Pop_Fields>;
  var_samp: Maybe<Users_Var_Samp_Fields>;
  variance: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Users_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  coins?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  items?: Maybe<Items_Bool_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  purchases?: Maybe<Purchases_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  coins?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  coins?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Items_Arr_Rel_Insert_Input>;
  password_hash?: Maybe<Scalars['String']>;
  purchases?: Maybe<Purchases_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  coins: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['Int']>;
  password_hash: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  coins: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['Int']>;
  password_hash: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  coins?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  items_aggregate?: Maybe<Items_Aggregate_Order_By>;
  password_hash?: Maybe<Order_By>;
  purchases_aggregate?: Maybe<Purchases_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  coins?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['Int']>;
  password_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  coins: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  coins: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

export type CreateUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one: Maybe<{ __typename?: 'users', id: number }> };

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['citext'];
}>;


export type FindUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, password_hash: string }> };

export type GetItemQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetItemQuery = { __typename?: 'query_root', items_by_pk: Maybe<{ __typename?: 'items', cost: number, sellerId: number }> };

export type PurchaseItemMutationVariables = Exact<{
  itemId: Scalars['Int'];
  buyerId: Scalars['Int'];
  sellerId: Scalars['Int'];
  decrementBuyerCoins: Scalars['Int'];
  incrementSellerCoins: Scalars['Int'];
}>;


export type PurchaseItemMutation = { __typename?: 'mutation_root', buyer: Maybe<{ __typename?: 'users', coins: number }>, seller: Maybe<{ __typename?: 'users', coins: number }>, purchase: Maybe<{ __typename?: 'purchases', item: { __typename?: 'items', secret: string } }> };

export type GetAggregatePurchasesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAggregatePurchasesQuery = { __typename?: 'query_root', purchases_aggregate: { __typename?: 'purchases_aggregate', aggregate: Maybe<{ __typename?: 'purchases_aggregate_fields', count: number }>, nodes: Array<{ __typename?: 'purchases', user_id: number, purchase_cost: number }> } };


export const CreateUserDocument = gql`
    mutation createUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    id
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query findUserByEmail($email: citext!) {
  users(where: {email: {_eq: $email}}) {
    id
    password_hash
  }
}
    `;
export const GetItemDocument = gql`
    query getItem($id: Int!) {
  items_by_pk(id: $id) {
    sellerId: user_id
    cost
  }
}
    `;
export const PurchaseItemDocument = gql`
    mutation purchaseItem($itemId: Int!, $buyerId: Int!, $sellerId: Int!, $decrementBuyerCoins: Int!, $incrementSellerCoins: Int!) {
  buyer: update_users_by_pk(
    pk_columns: {id: $buyerId}
    _inc: {coins: $decrementBuyerCoins}
  ) {
    coins
  }
  seller: update_users_by_pk(
    pk_columns: {id: $sellerId}
    _inc: {coins: $incrementSellerCoins}
  ) {
    coins
  }
  purchase: insert_purchases_one(
    object: {purchase_cost: $incrementSellerCoins, user_id: $buyerId, item_id: $itemId}
  ) {
    item {
      secret
    }
  }
}
    `;
export const GetAggregatePurchasesDocument = gql`
    query getAggregatePurchases {
  purchases_aggregate {
    aggregate {
      count
    }
    nodes {
      user_id
      purchase_cost
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser');
    },
    findUserByEmail(variables: FindUserByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserByEmailQuery>(FindUserByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUserByEmail');
    },
    getItem(variables: GetItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetItemQuery>(GetItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getItem');
    },
    purchaseItem(variables: PurchaseItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PurchaseItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PurchaseItemMutation>(PurchaseItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'purchaseItem');
    },
    getAggregatePurchases(variables?: GetAggregatePurchasesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAggregatePurchasesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAggregatePurchasesQuery>(GetAggregatePurchasesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAggregatePurchases');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
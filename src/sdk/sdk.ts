import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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

export type RegisterUserArgs = {
  email: Scalars['String'];
};

export type RegisterUserOutput = {
  __typename?: 'RegisterUserOutput';
  error: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "public_items" */
  delete_public_items: Maybe<Public_Items_Mutation_Response>;
  /** delete data from the table: "user_created_items" */
  delete_user_created_items: Maybe<User_Created_Items_Mutation_Response>;
  /** delete single row from the table: "user_created_items" */
  delete_user_created_items_by_pk: Maybe<User_Created_Items>;
  /** delete data from the table: "user_purchased_items" */
  delete_user_purchased_items: Maybe<User_Purchased_Items_Mutation_Response>;
  /** delete single row from the table: "user_purchased_items" */
  delete_user_purchased_items_by_pk: Maybe<User_Purchased_Items>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "public_items" */
  insert_public_items: Maybe<Public_Items_Mutation_Response>;
  /** insert a single row into the table: "public_items" */
  insert_public_items_one: Maybe<Public_Items>;
  /** insert data into the table: "user_created_items" */
  insert_user_created_items: Maybe<User_Created_Items_Mutation_Response>;
  /** insert a single row into the table: "user_created_items" */
  insert_user_created_items_one: Maybe<User_Created_Items>;
  /** insert data into the table: "user_purchased_items" */
  insert_user_purchased_items: Maybe<User_Purchased_Items_Mutation_Response>;
  /** insert a single row into the table: "user_purchased_items" */
  insert_user_purchased_items_one: Maybe<User_Purchased_Items>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  registerUser: Maybe<RegisterUserOutput>;
  /** update data of the table: "public_items" */
  update_public_items: Maybe<Public_Items_Mutation_Response>;
  /** update data of the table: "user_created_items" */
  update_user_created_items: Maybe<User_Created_Items_Mutation_Response>;
  /** update single row of the table: "user_created_items" */
  update_user_created_items_by_pk: Maybe<User_Created_Items>;
  /** update data of the table: "user_purchased_items" */
  update_user_purchased_items: Maybe<User_Purchased_Items_Mutation_Response>;
  /** update single row of the table: "user_purchased_items" */
  update_user_purchased_items_by_pk: Maybe<User_Purchased_Items>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Public_ItemsArgs = {
  where: Public_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Created_ItemsArgs = {
  where: User_Created_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Created_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Purchased_ItemsArgs = {
  where: User_Purchased_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Purchased_Items_By_PkArgs = {
  user_id: Scalars['Int'];
  user_item_id: Scalars['Int'];
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
export type Mutation_RootInsert_Public_ItemsArgs = {
  objects: Array<Public_Items_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Public_Items_OneArgs = {
  object: Public_Items_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_Created_ItemsArgs = {
  objects: Array<User_Created_Items_Insert_Input>;
  on_conflict: Maybe<User_Created_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Created_Items_OneArgs = {
  object: User_Created_Items_Insert_Input;
  on_conflict: Maybe<User_Created_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Purchased_ItemsArgs = {
  objects: Array<User_Purchased_Items_Insert_Input>;
  on_conflict: Maybe<User_Purchased_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Purchased_Items_OneArgs = {
  object: User_Purchased_Items_Insert_Input;
  on_conflict: Maybe<User_Purchased_Items_On_Conflict>;
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
export type Mutation_RootRegisterUserArgs = {
  params: Maybe<RegisterUserArgs>;
};


/** mutation root */
export type Mutation_RootUpdate_Public_ItemsArgs = {
  _inc: Maybe<Public_Items_Inc_Input>;
  _set: Maybe<Public_Items_Set_Input>;
  where: Public_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Created_ItemsArgs = {
  _inc: Maybe<User_Created_Items_Inc_Input>;
  _set: Maybe<User_Created_Items_Set_Input>;
  where: User_Created_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Created_Items_By_PkArgs = {
  _inc: Maybe<User_Created_Items_Inc_Input>;
  _set: Maybe<User_Created_Items_Set_Input>;
  pk_columns: User_Created_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Purchased_ItemsArgs = {
  _inc: Maybe<User_Purchased_Items_Inc_Input>;
  _set: Maybe<User_Purchased_Items_Set_Input>;
  where: User_Purchased_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Purchased_Items_By_PkArgs = {
  _inc: Maybe<User_Purchased_Items_Inc_Input>;
  _set: Maybe<User_Purchased_Items_Set_Input>;
  pk_columns: User_Purchased_Items_Pk_Columns_Input;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "public_items" */
  public_items: Array<Public_Items>;
  /** fetch aggregated fields from the table: "public_items" */
  public_items_aggregate: Public_Items_Aggregate;
  /** fetch data from the table: "user_created_items" */
  user_created_items: Array<User_Created_Items>;
  /** fetch aggregated fields from the table: "user_created_items" */
  user_created_items_aggregate: User_Created_Items_Aggregate;
  /** fetch data from the table: "user_created_items" using primary key columns */
  user_created_items_by_pk: Maybe<User_Created_Items>;
  /** fetch data from the table: "user_purchased_items" */
  user_purchased_items: Array<User_Purchased_Items>;
  /** fetch aggregated fields from the table: "user_purchased_items" */
  user_purchased_items_aggregate: User_Purchased_Items_Aggregate;
  /** fetch data from the table: "user_purchased_items" using primary key columns */
  user_purchased_items_by_pk: Maybe<User_Purchased_Items>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
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


export type Query_RootUser_Created_ItemsArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


export type Query_RootUser_Created_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


export type Query_RootUser_Created_Items_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Purchased_ItemsArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


export type Query_RootUser_Purchased_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


export type Query_RootUser_Purchased_Items_By_PkArgs = {
  user_id: Scalars['Int'];
  user_item_id: Scalars['Int'];
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
  /** fetch data from the table: "public_items" */
  public_items: Array<Public_Items>;
  /** fetch aggregated fields from the table: "public_items" */
  public_items_aggregate: Public_Items_Aggregate;
  /** fetch data from the table: "user_created_items" */
  user_created_items: Array<User_Created_Items>;
  /** fetch aggregated fields from the table: "user_created_items" */
  user_created_items_aggregate: User_Created_Items_Aggregate;
  /** fetch data from the table: "user_created_items" using primary key columns */
  user_created_items_by_pk: Maybe<User_Created_Items>;
  /** fetch data from the table: "user_purchased_items" */
  user_purchased_items: Array<User_Purchased_Items>;
  /** fetch aggregated fields from the table: "user_purchased_items" */
  user_purchased_items_aggregate: User_Purchased_Items_Aggregate;
  /** fetch data from the table: "user_purchased_items" using primary key columns */
  user_purchased_items_by_pk: Maybe<User_Purchased_Items>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
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


export type Subscription_RootUser_Created_ItemsArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


export type Subscription_RootUser_Created_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


export type Subscription_RootUser_Created_Items_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Purchased_ItemsArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


export type Subscription_RootUser_Purchased_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


export type Subscription_RootUser_Purchased_Items_By_PkArgs = {
  user_id: Scalars['Int'];
  user_item_id: Scalars['Int'];
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

/** columns and relationships of "user_created_items" */
export type User_Created_Items = {
  __typename?: 'user_created_items';
  cost: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  purchases: Array<User_Purchased_Items>;
  /** An aggregate relationship */
  purchases_aggregate: User_Purchased_Items_Aggregate;
  secret: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};


/** columns and relationships of "user_created_items" */
export type User_Created_ItemsPurchasesArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


/** columns and relationships of "user_created_items" */
export type User_Created_ItemsPurchases_AggregateArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};

/** aggregated selection of "user_created_items" */
export type User_Created_Items_Aggregate = {
  __typename?: 'user_created_items_aggregate';
  aggregate: Maybe<User_Created_Items_Aggregate_Fields>;
  nodes: Array<User_Created_Items>;
};

/** aggregate fields of "user_created_items" */
export type User_Created_Items_Aggregate_Fields = {
  __typename?: 'user_created_items_aggregate_fields';
  avg: Maybe<User_Created_Items_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<User_Created_Items_Max_Fields>;
  min: Maybe<User_Created_Items_Min_Fields>;
  stddev: Maybe<User_Created_Items_Stddev_Fields>;
  stddev_pop: Maybe<User_Created_Items_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Created_Items_Stddev_Samp_Fields>;
  sum: Maybe<User_Created_Items_Sum_Fields>;
  var_pop: Maybe<User_Created_Items_Var_Pop_Fields>;
  var_samp: Maybe<User_Created_Items_Var_Samp_Fields>;
  variance: Maybe<User_Created_Items_Variance_Fields>;
};


/** aggregate fields of "user_created_items" */
export type User_Created_Items_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<User_Created_Items_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_created_items" */
export type User_Created_Items_Aggregate_Order_By = {
  avg?: Maybe<User_Created_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Created_Items_Max_Order_By>;
  min?: Maybe<User_Created_Items_Min_Order_By>;
  stddev?: Maybe<User_Created_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Created_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Created_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Created_Items_Sum_Order_By>;
  var_pop?: Maybe<User_Created_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Created_Items_Var_Samp_Order_By>;
  variance?: Maybe<User_Created_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_created_items" */
export type User_Created_Items_Arr_Rel_Insert_Input = {
  data: Array<User_Created_Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Created_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Created_Items_Avg_Fields = {
  __typename?: 'user_created_items_avg_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_created_items" */
export type User_Created_Items_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_created_items". All fields are combined with a logical 'AND'. */
export type User_Created_Items_Bool_Exp = {
  _and?: Maybe<Array<User_Created_Items_Bool_Exp>>;
  _not?: Maybe<User_Created_Items_Bool_Exp>;
  _or?: Maybe<Array<User_Created_Items_Bool_Exp>>;
  cost?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  purchases?: Maybe<User_Purchased_Items_Bool_Exp>;
  secret?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_created_items" */
export enum User_Created_Items_Constraint {
  /** unique or primary key constraint */
  UserCreatedItemsPkey = 'user_created_items_pkey'
}

/** input type for incrementing numeric columns in table "user_created_items" */
export type User_Created_Items_Inc_Input = {
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_created_items" */
export type User_Created_Items_Insert_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  purchases?: Maybe<User_Purchased_Items_Arr_Rel_Insert_Input>;
  secret?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Created_Items_Max_Fields = {
  __typename?: 'user_created_items_max_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  secret: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_created_items" */
export type User_Created_Items_Max_Order_By = {
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
export type User_Created_Items_Min_Fields = {
  __typename?: 'user_created_items_min_fields';
  cost: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  secret: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_created_items" */
export type User_Created_Items_Min_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_created_items" */
export type User_Created_Items_Mutation_Response = {
  __typename?: 'user_created_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Created_Items>;
};

/** on conflict condition type for table "user_created_items" */
export type User_Created_Items_On_Conflict = {
  constraint: User_Created_Items_Constraint;
  update_columns?: Array<User_Created_Items_Update_Column>;
  where?: Maybe<User_Created_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "user_created_items". */
export type User_Created_Items_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  purchases_aggregate?: Maybe<User_Purchased_Items_Aggregate_Order_By>;
  secret?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_created_items */
export type User_Created_Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_created_items" */
export enum User_Created_Items_Select_Column {
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

/** input type for updating data in table "user_created_items" */
export type User_Created_Items_Set_Input = {
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
export type User_Created_Items_Stddev_Fields = {
  __typename?: 'user_created_items_stddev_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_created_items" */
export type User_Created_Items_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Created_Items_Stddev_Pop_Fields = {
  __typename?: 'user_created_items_stddev_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_created_items" */
export type User_Created_Items_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Created_Items_Stddev_Samp_Fields = {
  __typename?: 'user_created_items_stddev_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_created_items" */
export type User_Created_Items_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Created_Items_Sum_Fields = {
  __typename?: 'user_created_items_sum_fields';
  cost: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_created_items" */
export type User_Created_Items_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_created_items" */
export enum User_Created_Items_Update_Column {
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
export type User_Created_Items_Var_Pop_Fields = {
  __typename?: 'user_created_items_var_pop_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_created_items" */
export type User_Created_Items_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Created_Items_Var_Samp_Fields = {
  __typename?: 'user_created_items_var_samp_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_created_items" */
export type User_Created_Items_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Created_Items_Variance_Fields = {
  __typename?: 'user_created_items_variance_fields';
  cost: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_created_items" */
export type User_Created_Items_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "user_purchased_items" */
export type User_Purchased_Items = {
  __typename?: 'user_purchased_items';
  purchase_cost: Scalars['Int'];
  purchased_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
  user_item_id: Scalars['Int'];
};

/** aggregated selection of "user_purchased_items" */
export type User_Purchased_Items_Aggregate = {
  __typename?: 'user_purchased_items_aggregate';
  aggregate: Maybe<User_Purchased_Items_Aggregate_Fields>;
  nodes: Array<User_Purchased_Items>;
};

/** aggregate fields of "user_purchased_items" */
export type User_Purchased_Items_Aggregate_Fields = {
  __typename?: 'user_purchased_items_aggregate_fields';
  avg: Maybe<User_Purchased_Items_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<User_Purchased_Items_Max_Fields>;
  min: Maybe<User_Purchased_Items_Min_Fields>;
  stddev: Maybe<User_Purchased_Items_Stddev_Fields>;
  stddev_pop: Maybe<User_Purchased_Items_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Purchased_Items_Stddev_Samp_Fields>;
  sum: Maybe<User_Purchased_Items_Sum_Fields>;
  var_pop: Maybe<User_Purchased_Items_Var_Pop_Fields>;
  var_samp: Maybe<User_Purchased_Items_Var_Samp_Fields>;
  variance: Maybe<User_Purchased_Items_Variance_Fields>;
};


/** aggregate fields of "user_purchased_items" */
export type User_Purchased_Items_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<User_Purchased_Items_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_purchased_items" */
export type User_Purchased_Items_Aggregate_Order_By = {
  avg?: Maybe<User_Purchased_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Purchased_Items_Max_Order_By>;
  min?: Maybe<User_Purchased_Items_Min_Order_By>;
  stddev?: Maybe<User_Purchased_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Purchased_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Purchased_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Purchased_Items_Sum_Order_By>;
  var_pop?: Maybe<User_Purchased_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Purchased_Items_Var_Samp_Order_By>;
  variance?: Maybe<User_Purchased_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_purchased_items" */
export type User_Purchased_Items_Arr_Rel_Insert_Input = {
  data: Array<User_Purchased_Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Purchased_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Purchased_Items_Avg_Fields = {
  __typename?: 'user_purchased_items_avg_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Avg_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_purchased_items". All fields are combined with a logical 'AND'. */
export type User_Purchased_Items_Bool_Exp = {
  _and?: Maybe<Array<User_Purchased_Items_Bool_Exp>>;
  _not?: Maybe<User_Purchased_Items_Bool_Exp>;
  _or?: Maybe<Array<User_Purchased_Items_Bool_Exp>>;
  purchase_cost?: Maybe<Int_Comparison_Exp>;
  purchased_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  user_item_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_purchased_items" */
export enum User_Purchased_Items_Constraint {
  /** unique or primary key constraint */
  UserPurchasedItemsPkey = 'user_purchased_items_pkey'
}

/** input type for incrementing numeric columns in table "user_purchased_items" */
export type User_Purchased_Items_Inc_Input = {
  purchase_cost?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_purchased_items" */
export type User_Purchased_Items_Insert_Input = {
  purchase_cost?: Maybe<Scalars['Int']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  user_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Purchased_Items_Max_Fields = {
  __typename?: 'user_purchased_items_max_fields';
  purchase_cost: Maybe<Scalars['Int']>;
  purchased_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
  user_item_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Max_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Purchased_Items_Min_Fields = {
  __typename?: 'user_purchased_items_min_fields';
  purchase_cost: Maybe<Scalars['Int']>;
  purchased_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['Int']>;
  user_item_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Min_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_purchased_items" */
export type User_Purchased_Items_Mutation_Response = {
  __typename?: 'user_purchased_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Purchased_Items>;
};

/** on conflict condition type for table "user_purchased_items" */
export type User_Purchased_Items_On_Conflict = {
  constraint: User_Purchased_Items_Constraint;
  update_columns?: Array<User_Purchased_Items_Update_Column>;
  where?: Maybe<User_Purchased_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "user_purchased_items". */
export type User_Purchased_Items_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  purchased_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_purchased_items */
export type User_Purchased_Items_Pk_Columns_Input = {
  user_id: Scalars['Int'];
  user_item_id: Scalars['Int'];
};

/** select columns of table "user_purchased_items" */
export enum User_Purchased_Items_Select_Column {
  /** column name */
  PurchaseCost = 'purchase_cost',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserItemId = 'user_item_id'
}

/** input type for updating data in table "user_purchased_items" */
export type User_Purchased_Items_Set_Input = {
  purchase_cost?: Maybe<Scalars['Int']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  user_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Purchased_Items_Stddev_Fields = {
  __typename?: 'user_purchased_items_stddev_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Stddev_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Purchased_Items_Stddev_Pop_Fields = {
  __typename?: 'user_purchased_items_stddev_pop_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Stddev_Pop_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Purchased_Items_Stddev_Samp_Fields = {
  __typename?: 'user_purchased_items_stddev_samp_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Stddev_Samp_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Purchased_Items_Sum_Fields = {
  __typename?: 'user_purchased_items_sum_fields';
  purchase_cost: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
  user_item_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Sum_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** update columns of table "user_purchased_items" */
export enum User_Purchased_Items_Update_Column {
  /** column name */
  PurchaseCost = 'purchase_cost',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserItemId = 'user_item_id'
}

/** aggregate var_pop on columns */
export type User_Purchased_Items_Var_Pop_Fields = {
  __typename?: 'user_purchased_items_var_pop_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Var_Pop_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Purchased_Items_Var_Samp_Fields = {
  __typename?: 'user_purchased_items_var_samp_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Var_Samp_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Purchased_Items_Variance_Fields = {
  __typename?: 'user_purchased_items_variance_fields';
  purchase_cost: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
  user_item_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_purchased_items" */
export type User_Purchased_Items_Variance_Order_By = {
  purchase_cost?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  user_item_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  coins: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  created_items: Array<User_Created_Items>;
  /** An aggregate relationship */
  created_items_aggregate: User_Created_Items_Aggregate;
  display_name: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  purchased_items: Array<User_Purchased_Items>;
  /** An aggregate relationship */
  purchased_items_aggregate: User_Purchased_Items_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersCreated_ItemsArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCreated_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Created_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Created_Items_Order_By>>;
  where: Maybe<User_Created_Items_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPurchased_ItemsArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPurchased_Items_AggregateArgs = {
  distinct_on: Maybe<Array<User_Purchased_Items_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<User_Purchased_Items_Order_By>>;
  where: Maybe<User_Purchased_Items_Bool_Exp>;
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
  created_items?: Maybe<User_Created_Items_Bool_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  purchased_items?: Maybe<User_Purchased_Items_Bool_Exp>;
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
  created_items?: Maybe<User_Created_Items_Arr_Rel_Insert_Input>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  purchased_items?: Maybe<User_Purchased_Items_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  coins: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  coins: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
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
  created_items_aggregate?: Maybe<User_Created_Items_Aggregate_Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  purchased_items_aggregate?: Maybe<User_Purchased_Items_Aggregate_Order_By>;
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  coins?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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

export type RegisterUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type RegisterUserMutation = { __typename?: 'mutation_root', insert_users_one: Maybe<{ __typename?: 'users', id: number }> };


export const RegisterUserDocument = gql`
    mutation registerUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    registerUser(variables: RegisterUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterUserMutation>(RegisterUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registerUser');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
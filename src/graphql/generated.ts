import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BrandByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<BrandSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Brand`. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<BrandEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BrandType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Brand`. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BrandType>;
};

export type BrandFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type BrandInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
};

export type BrandMutation = {
  __typename?: 'BrandMutation';
  createBrand?: Maybe<BrandType>;
  updateBrand?: Maybe<BrandType>;
};


export type BrandMutationCreateBrandArgs = {
  brand: BrandInputType;
};


export type BrandMutationUpdateBrandArgs = {
  brand: BrandInputType;
  id: Scalars['Int'];
};

export type BrandQuery = {
  __typename?: 'BrandQuery';
  findById?: Maybe<BrandType>;
  findall?: Maybe<BrandConnection>;
};


export type BrandQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type BrandQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BrandFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<BrandByInputType>;
};

export enum BrandSortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type BrandType = {
  __typename?: 'BrandType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
};

export type CompanyByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<CompanySortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Company`. */
export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CompanyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CompanyType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Company`. */
export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CompanyType>;
};

export type CompanyFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  corporateName?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type CompanyInputType = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  cellPhone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj: Scalars['String'];
  complement?: InputMaybe<Scalars['String']>;
  corporateName: Scalars['String'];
  eMail?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CompanyMutation = {
  __typename?: 'CompanyMutation';
  createCompany?: Maybe<CompanyType>;
  updateCompany?: Maybe<CompanyType>;
};


export type CompanyMutationCreateCompanyArgs = {
  company: CompanyInputType;
};


export type CompanyMutationUpdateCompanyArgs = {
  company: CompanyInputType;
  id: Scalars['Int'];
};

export type CompanyQuery = {
  __typename?: 'CompanyQuery';
  findById?: Maybe<CompanyType>;
  findall?: Maybe<CompanyConnection>;
};


export type CompanyQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type CompanyQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CompanyFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<CompanyByInputType>;
};

export enum CompanySortingFieldsEnumType {
  Active = 'ACTIVE',
  City = 'CITY',
  Cnpj = 'CNPJ',
  CorporateName = 'CORPORATE_NAME',
  FantasyName = 'FANTASY_NAME',
  Neighbourhood = 'NEIGHBOURHOOD',
  State = 'STATE'
}

export type CompanyType = {
  __typename?: 'CompanyType';
  active: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  cellPhone?: Maybe<Scalars['String']>;
  changeDate?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  corporateName?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  eMail?: Maybe<Scalars['String']>;
  fantasyName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ConstructionAdvanceMoneyByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionAdvanceMoneySortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionAdvanceMoney`. */
export type ConstructionAdvanceMoneyConnection = {
  __typename?: 'ConstructionAdvanceMoneyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionAdvanceMoneyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionAdvanceMoneyType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionAdvanceMoney`. */
export type ConstructionAdvanceMoneyEdge = {
  __typename?: 'ConstructionAdvanceMoneyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionAdvanceMoneyType>;
};

export type ConstructionAdvanceMoneyFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ConstructionAdvanceMoneyInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type ConstructionAdvanceMoneyMutation = {
  __typename?: 'ConstructionAdvanceMoneyMutation';
  createConstructionAdvanceMoney?: Maybe<ConstructionAdvanceMoneyType>;
  updateConstructionAdvanceMoney?: Maybe<ConstructionAdvanceMoneyType>;
};


export type ConstructionAdvanceMoneyMutationCreateConstructionAdvanceMoneyArgs = {
  constructionAdvanceMoney: ConstructionAdvanceMoneyInputType;
};


export type ConstructionAdvanceMoneyMutationUpdateConstructionAdvanceMoneyArgs = {
  constructionAdvanceMoney: ConstructionAdvanceMoneyInputType;
  id: Scalars['Int'];
};

export type ConstructionAdvanceMoneyQuery = {
  __typename?: 'ConstructionAdvanceMoneyQuery';
  findById?: Maybe<ConstructionAdvanceMoneyType>;
  findall?: Maybe<ConstructionAdvanceMoneyConnection>;
};


export type ConstructionAdvanceMoneyQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionAdvanceMoneyQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionAdvanceMoneyFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionAdvanceMoneyByInputType>;
};

export enum ConstructionAdvanceMoneySortingFieldsEnumType {
  Date = 'DATE',
  Id = 'ID'
}

export type ConstructionAdvanceMoneyType = {
  __typename?: 'ConstructionAdvanceMoneyType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionInvestor?: Maybe<ConstructionInvestorType>;
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
  value: Scalars['Float'];
};

export type ConstructionBatchByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionBatchSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionBatch`. */
export type ConstructionBatchConnection = {
  __typename?: 'ConstructionBatchConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionBatchEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionBatchType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionBatch`. */
export type ConstructionBatchEdge = {
  __typename?: 'ConstructionBatchEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionBatchType>;
};

export type ConstructionBatchFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  peopleId?: InputMaybe<Scalars['Int']>;
};

export type ConstructionBatchInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  peopleId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ConstructionBatchMutation = {
  __typename?: 'ConstructionBatchMutation';
  createConstructionBatch?: Maybe<ConstructionBatchType>;
  updateConstructionBatch?: Maybe<ConstructionBatchType>;
};


export type ConstructionBatchMutationCreateConstructionBatchArgs = {
  constructionBatch: ConstructionBatchInputType;
};


export type ConstructionBatchMutationUpdateConstructionBatchArgs = {
  constructionBatch: ConstructionBatchInputType;
  id: Scalars['Int'];
};

export type ConstructionBatchQuery = {
  __typename?: 'ConstructionBatchQuery';
  findById?: Maybe<ConstructionBatchType>;
  findall?: Maybe<ConstructionBatchConnection>;
};


export type ConstructionBatchQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionBatchQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionBatchFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionBatchByInputType>;
};

export enum ConstructionBatchSortingFieldsEnumType {
  Id = 'ID',
  NamePeople = 'NAME_PEOPLE'
}

export type ConstructionBatchType = {
  __typename?: 'ConstructionBatchType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  people?: Maybe<PeopleType>;
  peopleId?: Maybe<Scalars['Int']>;
  registrationUser?: Maybe<UserType>;
  value?: Maybe<Scalars['Float']>;
};

export type ConstructionByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Construction`. */
export type ConstructionConnection = {
  __typename?: 'ConstructionConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ConstructionDocumentationByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionDocumentationSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionDocumentation`. */
export type ConstructionDocumentationConnection = {
  __typename?: 'ConstructionDocumentationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionDocumentationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionDocumentationType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionDocumentation`. */
export type ConstructionDocumentationEdge = {
  __typename?: 'ConstructionDocumentationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionDocumentationType>;
};

export type ConstructionDocumentationFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ConstructionDocumentationInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  documentationId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ConstructionDocumentationMutation = {
  __typename?: 'ConstructionDocumentationMutation';
  createConstructionDocumentation?: Maybe<ConstructionDocumentationType>;
  updateConstructionDocumentation?: Maybe<ConstructionDocumentationType>;
};


export type ConstructionDocumentationMutationCreateConstructionDocumentationArgs = {
  constructionDocumentation: ConstructionDocumentationInputType;
};


export type ConstructionDocumentationMutationUpdateConstructionDocumentationArgs = {
  constructionDocumentation: ConstructionDocumentationInputType;
  id: Scalars['Int'];
};

export type ConstructionDocumentationQuery = {
  __typename?: 'ConstructionDocumentationQuery';
  findById?: Maybe<ConstructionDocumentationType>;
  findall?: Maybe<ConstructionDocumentationConnection>;
};


export type ConstructionDocumentationQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionDocumentationQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionDocumentationFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionDocumentationByInputType>;
};

export enum ConstructionDocumentationSortingFieldsEnumType {
  Date = 'DATE',
  Id = 'ID'
}

export type ConstructionDocumentationType = {
  __typename?: 'ConstructionDocumentationType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionInvestor?: Maybe<ConstructionInvestorType>;
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  documentation?: Maybe<DocumentationType>;
  documentationId: Scalars['Int'];
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
  value: Scalars['Float'];
};

/** An edge in a connection from an object to another object of type `Construction`. */
export type ConstructionEdge = {
  __typename?: 'ConstructionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionType>;
};

export type ConstructionExpenseByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionExpenseSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionExpense`. */
export type ConstructionExpenseConnection = {
  __typename?: 'ConstructionExpenseConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionExpenseEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionExpenseType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionExpense`. */
export type ConstructionExpenseEdge = {
  __typename?: 'ConstructionExpenseEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionExpenseType>;
};

export type ConstructionExpenseFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ConstructionExpenseInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  expenseId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ConstructionExpenseMutation = {
  __typename?: 'ConstructionExpenseMutation';
  createConstructionExpense?: Maybe<ConstructionExpenseType>;
  updateConstructionExpense?: Maybe<ConstructionExpenseType>;
};


export type ConstructionExpenseMutationCreateConstructionExpenseArgs = {
  constructionExpense: ConstructionExpenseInputType;
};


export type ConstructionExpenseMutationUpdateConstructionExpenseArgs = {
  constructionExpense: ConstructionExpenseInputType;
  id: Scalars['Int'];
};

export type ConstructionExpenseQuery = {
  __typename?: 'ConstructionExpenseQuery';
  findById?: Maybe<ConstructionExpenseType>;
  findall?: Maybe<ConstructionExpenseConnection>;
};


export type ConstructionExpenseQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionExpenseQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionExpenseFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionExpenseByInputType>;
};

export enum ConstructionExpenseSortingFieldsEnumType {
  Date = 'DATE',
  Id = 'ID'
}

export type ConstructionExpenseType = {
  __typename?: 'ConstructionExpenseType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionInvestor?: Maybe<ConstructionInvestorType>;
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  expense?: Maybe<ExpenseType>;
  expenseId: Scalars['Int'];
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
  value: Scalars['Float'];
};

export type ConstructionFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  dateBegin?: InputMaybe<Scalars['DateTime']>;
  dateEnd?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  statusConstruction?: InputMaybe<StatusConstructionEnumType>;
};

export type ConstructionHouseByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionHouseSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionHouse`. */
export type ConstructionHouseConnection = {
  __typename?: 'ConstructionHouseConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionHouseEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionHouseType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionHouse`. */
export type ConstructionHouseEdge = {
  __typename?: 'ConstructionHouseEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionHouseType>;
};

export type ConstructionHouseFilterByInputType = {
  buildingArea?: InputMaybe<Scalars['Float']>;
  constructionId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  energyConsumptionUnit?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  permeableArea?: InputMaybe<Scalars['Float']>;
  registration?: InputMaybe<Scalars['String']>;
  saleValue?: InputMaybe<Scalars['Float']>;
  waterConsumptionUnit?: InputMaybe<Scalars['String']>;
};

export type ConstructionHouseInputType = {
  active: Scalars['Boolean'];
  buildingArea?: InputMaybe<Scalars['Float']>;
  constructionId?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  energyConsumptionUnit?: InputMaybe<Scalars['String']>;
  fractionBatch?: InputMaybe<Scalars['Float']>;
  permeableArea?: InputMaybe<Scalars['Float']>;
  saleValue?: InputMaybe<Scalars['Float']>;
  waterConsumptionUnit?: InputMaybe<Scalars['String']>;
};

export type ConstructionHouseMutation = {
  __typename?: 'ConstructionHouseMutation';
  createConstructionHouse?: Maybe<ConstructionHouseType>;
  updateConstructionHouse?: Maybe<ConstructionHouseType>;
};


export type ConstructionHouseMutationCreateConstructionHouseArgs = {
  constructionHouse: ConstructionHouseInputType;
};


export type ConstructionHouseMutationUpdateConstructionHouseArgs = {
  constructionHouse: ConstructionHouseInputType;
  id: Scalars['Int'];
};

export type ConstructionHouseQuery = {
  __typename?: 'ConstructionHouseQuery';
  findById?: Maybe<ConstructionHouseType>;
  findall?: Maybe<ConstructionHouseConnection>;
};


export type ConstructionHouseQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionHouseQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionHouseFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionHouseByInputType>;
};

export enum ConstructionHouseSortingFieldsEnumType {
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type ConstructionHouseType = {
  __typename?: 'ConstructionHouseType';
  active: Scalars['Boolean'];
  buildingArea?: Maybe<Scalars['Float']>;
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionId?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  energyConsumptionUnit?: Maybe<Scalars['String']>;
  fractionBatch?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  permeableArea?: Maybe<Scalars['Float']>;
  registrationUser?: Maybe<UserType>;
  saleValue?: Maybe<Scalars['Float']>;
  waterConsumptionUnit?: Maybe<Scalars['String']>;
};

export type ConstructionInputType = {
  active: Scalars['Boolean'];
  address: Scalars['String'];
  art: Scalars['Int'];
  batchArea: Scalars['Int'];
  buildingArea: Scalars['Int'];
  city: Scalars['String'];
  cno: Scalars['Int'];
  complement: Scalars['String'];
  dateBegin: Scalars['DateTime'];
  dateEnd?: InputMaybe<Scalars['DateTime']>;
  identifier: Scalars['String'];
  latitude: Scalars['Float'];
  license: Scalars['Int'];
  longitude: Scalars['Float'];
  motherEnrollment?: InputMaybe<Scalars['Float']>;
  municipalRegistration?: InputMaybe<Scalars['Int']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  saleValue?: InputMaybe<Scalars['Float']>;
  state: Scalars['String'];
  statusConstruction?: InputMaybe<StatusConstructionEnumType>;
  undergroundUse?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type ConstructionInvestorByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionInvestorSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionInvestor`. */
export type ConstructionInvestorConnection = {
  __typename?: 'ConstructionInvestorConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionInvestorEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionInvestorType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionInvestor`. */
export type ConstructionInvestorEdge = {
  __typename?: 'ConstructionInvestorEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionInvestorType>;
};

export type ConstructionInvestorFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  peopleId?: InputMaybe<Scalars['Int']>;
};

export type ConstructionInvestorInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  peopleId: Scalars['Int'];
};

export type ConstructionInvestorMutation = {
  __typename?: 'ConstructionInvestorMutation';
  createConstructionInvestor?: Maybe<ConstructionInvestorType>;
  updateConstructionInvestor?: Maybe<ConstructionInvestorType>;
};


export type ConstructionInvestorMutationCreateConstructionInvestorArgs = {
  constructionInvestor: ConstructionInvestorInputType;
};


export type ConstructionInvestorMutationUpdateConstructionInvestorArgs = {
  constructionInvestor: ConstructionInvestorInputType;
  id: Scalars['Int'];
};

export type ConstructionInvestorQuery = {
  __typename?: 'ConstructionInvestorQuery';
  findById?: Maybe<ConstructionInvestorType>;
  findall?: Maybe<ConstructionInvestorConnection>;
};


export type ConstructionInvestorQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionInvestorQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionInvestorFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionInvestorByInputType>;
};

export enum ConstructionInvestorSortingFieldsEnumType {
  Id = 'ID',
  NamePeople = 'NAME_PEOPLE'
}

export type ConstructionInvestorType = {
  __typename?: 'ConstructionInvestorType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  people?: Maybe<PeopleType>;
  peopleId?: Maybe<Scalars['Int']>;
  registrationUser?: Maybe<UserType>;
};

export type ConstructionManpowerByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionManpowerSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionManpower`. */
export type ConstructionManpowerConnection = {
  __typename?: 'ConstructionManpowerConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionManpowerEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionManpowerType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionManpower`. */
export type ConstructionManpowerEdge = {
  __typename?: 'ConstructionManpowerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionManpowerType>;
};

export type ConstructionManpowerFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ConstructionManpowerInputType = {
  active: Scalars['Boolean'];
  constructionId: Scalars['Int'];
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  employeeId: Scalars['Int'];
  outsourcedId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ConstructionManpowerMutation = {
  __typename?: 'ConstructionManpowerMutation';
  createConstructionManpower?: Maybe<ConstructionManpowerType>;
  updateConstructionManpower?: Maybe<ConstructionManpowerType>;
};


export type ConstructionManpowerMutationCreateConstructionManpowerArgs = {
  constructionManpower: ConstructionManpowerInputType;
};


export type ConstructionManpowerMutationUpdateConstructionManpowerArgs = {
  constructionManpower: ConstructionManpowerInputType;
  id: Scalars['Int'];
};

export type ConstructionManpowerQuery = {
  __typename?: 'ConstructionManpowerQuery';
  findById?: Maybe<ConstructionManpowerType>;
  findall?: Maybe<ConstructionManpowerConnection>;
};


export type ConstructionManpowerQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionManpowerQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionManpowerFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionManpowerByInputType>;
};

export enum ConstructionManpowerSortingFieldsEnumType {
  Date = 'DATE',
  Id = 'ID'
}

export type ConstructionManpowerType = {
  __typename?: 'ConstructionManpowerType';
  active: Scalars['Boolean'];
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionInvestor?: Maybe<ConstructionInvestorType>;
  constructionInvestorId: Scalars['Int'];
  date: Scalars['DateTime'];
  employee?: Maybe<EmployeeType>;
  employeeId: Scalars['Int'];
  id: Scalars['Int'];
  outsourced?: Maybe<OutsourcedType>;
  outsourcedId: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
  value: Scalars['Float'];
};

export type ConstructionMaterialByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ConstructionMaterialSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ConstructionMaterial`. */
export type ConstructionMaterialConnection = {
  __typename?: 'ConstructionMaterialConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ConstructionMaterialEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ConstructionMaterialType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ConstructionMaterial`. */
export type ConstructionMaterialEdge = {
  __typename?: 'ConstructionMaterialEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ConstructionMaterialType>;
};

export type ConstructionMaterialFilterByInputType = {
  constructionId?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  purchaseDate?: InputMaybe<Scalars['DateTime']>;
  quantity?: InputMaybe<Scalars['Float']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
};

export type ConstructionMaterialInputType = {
  active: Scalars['Boolean'];
  brandId: Scalars['Int'];
  constructionId: Scalars['Int'];
  constructionInvestorId: Scalars['Int'];
  groupId: Scalars['Int'];
  productId: Scalars['Int'];
  providerId: Scalars['Int'];
  quantity: Scalars['Float'];
  unitPrice: Scalars['Float'];
  unityId: Scalars['Int'];
};

export type ConstructionMaterialMutation = {
  __typename?: 'ConstructionMaterialMutation';
  createConstructionMaterial?: Maybe<ConstructionMaterialType>;
  updateConstructionMaterial?: Maybe<ConstructionMaterialType>;
};


export type ConstructionMaterialMutationCreateConstructionMaterialArgs = {
  constructionMaterial: ConstructionMaterialInputType;
};


export type ConstructionMaterialMutationUpdateConstructionMaterialArgs = {
  constructionMaterial: ConstructionMaterialInputType;
  id: Scalars['Int'];
};

export type ConstructionMaterialQuery = {
  __typename?: 'ConstructionMaterialQuery';
  findById?: Maybe<ConstructionMaterialType>;
  findall?: Maybe<ConstructionMaterialConnection>;
};


export type ConstructionMaterialQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionMaterialQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionMaterialFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionMaterialByInputType>;
};

export enum ConstructionMaterialSortingFieldsEnumType {
  Id = 'ID',
  PurchaseDate = 'PURCHASE_DATE'
}

export type ConstructionMaterialType = {
  __typename?: 'ConstructionMaterialType';
  active: Scalars['Boolean'];
  brand?: Maybe<BrandType>;
  brandId?: Maybe<Scalars['Int']>;
  changeUser?: Maybe<UserType>;
  construction?: Maybe<ConstructionType>;
  constructionId?: Maybe<Scalars['Int']>;
  constructionInvestor?: Maybe<ConstructionInvestorType>;
  constructionInvestorId?: Maybe<Scalars['Int']>;
  group?: Maybe<GroupType>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  product?: Maybe<ProductType>;
  productId?: Maybe<Scalars['Int']>;
  provider?: Maybe<ProviderType>;
  providerId?: Maybe<Scalars['Int']>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  registrationUser?: Maybe<UserType>;
  unitPrice?: Maybe<Scalars['Float']>;
  unity?: Maybe<UnityType>;
};

export type ConstructionMutation = {
  __typename?: 'ConstructionMutation';
  createConstruction?: Maybe<ConstructionType>;
  updateConstruction?: Maybe<ConstructionType>;
};


export type ConstructionMutationCreateConstructionArgs = {
  construction: ConstructionInputType;
};


export type ConstructionMutationUpdateConstructionArgs = {
  construction: ConstructionInputType;
  id: Scalars['Int'];
};

export type ConstructionQuery = {
  __typename?: 'ConstructionQuery';
  findById?: Maybe<ConstructionType>;
  findall?: Maybe<ConstructionConnection>;
};


export type ConstructionQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ConstructionQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConstructionFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ConstructionByInputType>;
};

export enum ConstructionSortingFieldsEnumType {
  DateBegin = 'DATE_BEGIN',
  DateEnd = 'DATE_END',
  Id = 'ID',
  Identifier = 'IDENTIFIER',
  StatusConstruction = 'STATUS_CONSTRUCTION'
}

export type ConstructionType = {
  __typename?: 'ConstructionType';
  active: Scalars['Boolean'];
  address: Scalars['String'];
  art?: Maybe<Scalars['Int']>;
  batchArea?: Maybe<Scalars['Int']>;
  buildingArea?: Maybe<Scalars['Int']>;
  changeUser?: Maybe<UserType>;
  city: Scalars['String'];
  cno?: Maybe<Scalars['Int']>;
  company?: Maybe<CompanyType>;
  complement: Scalars['String'];
  dateBegin: Scalars['DateTime'];
  dateEnd?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  identifier: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  license?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  motherEnrollment?: Maybe<Scalars['Float']>;
  municipalRegistration?: Maybe<Scalars['Int']>;
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  registrationUser?: Maybe<UserType>;
  saleValue?: Maybe<Scalars['Float']>;
  state: Scalars['String'];
  statusConstruction?: Maybe<Scalars['String']>;
  undergroundUse?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type DocumentationByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<DocumentationSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Documentation`. */
export type DocumentationConnection = {
  __typename?: 'DocumentationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DocumentationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DocumentationType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Documentation`. */
export type DocumentationEdge = {
  __typename?: 'DocumentationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DocumentationType>;
};

export type DocumentationFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type DocumentationInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
};

export type DocumentationMutation = {
  __typename?: 'DocumentationMutation';
  createDocumentation?: Maybe<DocumentationType>;
  updateDocumentation?: Maybe<DocumentationType>;
};


export type DocumentationMutationCreateDocumentationArgs = {
  documentation: DocumentationInputType;
};


export type DocumentationMutationUpdateDocumentationArgs = {
  documentation: DocumentationInputType;
  id: Scalars['Int'];
};

export type DocumentationQuery = {
  __typename?: 'DocumentationQuery';
  findById?: Maybe<DocumentationType>;
  findall?: Maybe<DocumentationConnection>;
};


export type DocumentationQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type DocumentationQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentationFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<DocumentationByInputType>;
};

export enum DocumentationSortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type DocumentationType = {
  __typename?: 'DocumentationType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
};

export type EmployeeByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<EmployeeSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Employee`. */
export type EmployeeConnection = {
  __typename?: 'EmployeeConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<EmployeeEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<EmployeeType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Employee`. */
export type EmployeeEdge = {
  __typename?: 'EmployeeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EmployeeType>;
};

export type EmployeeFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  cpf?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type EmployeeInputType = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  cellPhone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  complement?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  eMail?: InputMaybe<Scalars['String']>;
  employed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  outsourced?: InputMaybe<Scalars['Boolean']>;
  responsibilityId: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type EmployeeMutation = {
  __typename?: 'EmployeeMutation';
  createEmployee?: Maybe<EmployeeType>;
  updateEmployee?: Maybe<EmployeeType>;
};


export type EmployeeMutationCreateEmployeeArgs = {
  employee: EmployeeInputType;
};


export type EmployeeMutationUpdateEmployeeArgs = {
  employee: EmployeeInputType;
  id: Scalars['Int'];
};

export type EmployeeQuery = {
  __typename?: 'EmployeeQuery';
  findById?: Maybe<EmployeeType>;
  findall?: Maybe<EmployeeConnection>;
};


export type EmployeeQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type EmployeeQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EmployeeFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<EmployeeByInputType>;
};

export enum EmployeeSortingFieldsEnumType {
  Active = 'ACTIVE',
  City = 'CITY',
  Client = 'CLIENT',
  Constructor = 'CONSTRUCTOR',
  Cpf = 'CPF',
  Investor = 'INVESTOR',
  Name = 'NAME',
  Neighbourhood = 'NEIGHBOURHOOD',
  Responsibility = 'RESPONSIBILITY',
  State = 'STATE'
}

export type EmployeeType = {
  __typename?: 'EmployeeType';
  active: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  cellPhone?: Maybe<Scalars['String']>;
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  city?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  complement?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  eMail?: Maybe<Scalars['String']>;
  employed?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  outsourced?: Maybe<Scalars['Boolean']>;
  registrationUser?: Maybe<UserType>;
  responsibility?: Maybe<ResponsibilityType>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  typePeople?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ExpenseByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ExpenseSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Expense`. */
export type ExpenseConnection = {
  __typename?: 'ExpenseConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ExpenseEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ExpenseType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Expense`. */
export type ExpenseEdge = {
  __typename?: 'ExpenseEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExpenseType>;
};

export type ExpenseFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  typeExpense?: InputMaybe<TypeExpenseEnumType>;
};

export type ExpenseInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  typeExpense?: InputMaybe<TypeExpenseEnumType>;
};

export type ExpenseMutation = {
  __typename?: 'ExpenseMutation';
  createExpense?: Maybe<ExpenseType>;
  updateExpense?: Maybe<ExpenseType>;
};


export type ExpenseMutationCreateExpenseArgs = {
  expense: ExpenseInputType;
};


export type ExpenseMutationUpdateExpenseArgs = {
  expense: ExpenseInputType;
  id: Scalars['Int'];
};

export type ExpenseQuery = {
  __typename?: 'ExpenseQuery';
  findById?: Maybe<ExpenseType>;
  findall?: Maybe<ExpenseConnection>;
};


export type ExpenseQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ExpenseQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ExpenseFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ExpenseByInputType>;
};

export enum ExpenseSortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID',
  TypeExpense = 'TYPE_EXPENSE'
}

export type ExpenseType = {
  __typename?: 'ExpenseType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
  typeExpense?: Maybe<Scalars['String']>;
};

export type GroupByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<GroupSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Group`. */
export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<GroupType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Group`. */
export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<GroupType>;
};

export type GroupFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type GroupInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
};

export type GroupMutation = {
  __typename?: 'GroupMutation';
  createGroup?: Maybe<GroupType>;
  updateGroup?: Maybe<GroupType>;
};


export type GroupMutationCreateGroupArgs = {
  group: GroupInputType;
};


export type GroupMutationUpdateGroupArgs = {
  group: GroupInputType;
  id: Scalars['Int'];
};

export type GroupQuery = {
  __typename?: 'GroupQuery';
  findById?: Maybe<GroupType>;
  findall?: Maybe<GroupConnection>;
};


export type GroupQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type GroupQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GroupFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<GroupByInputType>;
};

export enum GroupSortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type GroupType = {
  __typename?: 'GroupType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
};

export type ObrasMutation = {
  __typename?: 'ObrasMutation';
  brands?: Maybe<BrandMutation>;
  companies?: Maybe<CompanyMutation>;
  constructionAdvancesMoney?: Maybe<ConstructionAdvanceMoneyMutation>;
  constructionBatchs?: Maybe<ConstructionBatchMutation>;
  constructionDocumentations?: Maybe<ConstructionDocumentationMutation>;
  constructionExpenses?: Maybe<ConstructionExpenseMutation>;
  constructionHouse?: Maybe<ConstructionHouseMutation>;
  constructionInvestors?: Maybe<ConstructionInvestorMutation>;
  constructionManpowers?: Maybe<ConstructionManpowerMutation>;
  constructionMaterials?: Maybe<ConstructionMaterialMutation>;
  constructions?: Maybe<ConstructionMutation>;
  documentations?: Maybe<DocumentationMutation>;
  employees?: Maybe<EmployeeMutation>;
  expenses?: Maybe<ExpenseMutation>;
  group?: Maybe<GroupMutation>;
  outsourceds?: Maybe<OutsourcedMutation>;
  peoples?: Maybe<PeopleMutation>;
  productProviders?: Maybe<ProductProviderMutation>;
  products?: Maybe<ProductMutation>;
  providers?: Maybe<ProviderMutation>;
  responsibilities?: Maybe<ResponsibilityMutation>;
  unity?: Maybe<UnityMutation>;
};

export type ObrasQuery = {
  __typename?: 'ObrasQuery';
  brands?: Maybe<BrandQuery>;
  companies?: Maybe<CompanyQuery>;
  constructionAdvancesMoney?: Maybe<ConstructionAdvanceMoneyQuery>;
  constructionBatchs?: Maybe<ConstructionBatchQuery>;
  constructionDocumentations?: Maybe<ConstructionDocumentationQuery>;
  constructionExpenses?: Maybe<ConstructionExpenseQuery>;
  constructionHouses?: Maybe<ConstructionHouseQuery>;
  constructionInvestors?: Maybe<ConstructionInvestorQuery>;
  constructionManpowers?: Maybe<ConstructionManpowerQuery>;
  constructionMaterials?: Maybe<ConstructionMaterialQuery>;
  constructions?: Maybe<ConstructionQuery>;
  documentations?: Maybe<DocumentationQuery>;
  employees?: Maybe<EmployeeQuery>;
  expenses?: Maybe<ExpenseQuery>;
  group?: Maybe<GroupQuery>;
  outsourceds?: Maybe<OutsourcedQuery>;
  peoples?: Maybe<PeopleQuery>;
  productProviders?: Maybe<ProductProviderQuery>;
  products?: Maybe<ProductQuery>;
  providers?: Maybe<ProviderQuery>;
  responsibilities?: Maybe<ResponsibilityQuery>;
  unity?: Maybe<UnityQuery>;
  user?: Maybe<UserQuery>;
};

export type OutsourcedByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<OutsourcedSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Outsourced`. */
export type OutsourcedConnection = {
  __typename?: 'OutsourcedConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<OutsourcedEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<OutsourcedType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Outsourced`. */
export type OutsourcedEdge = {
  __typename?: 'OutsourcedEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OutsourcedType>;
};

export type OutsourcedFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  corporateName?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<TypePeopleEnumType>;
};

export type OutsourcedInputType = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  cellPhone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  complement?: InputMaybe<Scalars['String']>;
  corporateName: Scalars['String'];
  cpf?: InputMaybe<Scalars['String']>;
  eMail?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<TypePeopleEnumType>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OutsourcedMutation = {
  __typename?: 'OutsourcedMutation';
  createOutsourced?: Maybe<OutsourcedType>;
  updateOutsourced?: Maybe<OutsourcedType>;
};


export type OutsourcedMutationCreateOutsourcedArgs = {
  outsourced: OutsourcedInputType;
};


export type OutsourcedMutationUpdateOutsourcedArgs = {
  id: Scalars['Int'];
  outsourced: OutsourcedInputType;
};

export type OutsourcedQuery = {
  __typename?: 'OutsourcedQuery';
  findById?: Maybe<OutsourcedType>;
  findall?: Maybe<OutsourcedConnection>;
};


export type OutsourcedQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type OutsourcedQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OutsourcedFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<OutsourcedByInputType>;
};

export enum OutsourcedSortingFieldsEnumType {
  Active = 'ACTIVE',
  City = 'CITY',
  Cnpj = 'CNPJ',
  CorporateName = 'CORPORATE_NAME',
  Cpf = 'CPF',
  FantasyName = 'FANTASY_NAME',
  Neighbourhood = 'NEIGHBOURHOOD',
  State = 'STATE',
  TypePeople = 'TYPE_PEOPLE'
}

export type OutsourcedType = {
  __typename?: 'OutsourcedType';
  active: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  cellPhone?: Maybe<Scalars['String']>;
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  city?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  complement?: Maybe<Scalars['String']>;
  corporateName?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  eMail?: Maybe<Scalars['String']>;
  fantasyName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  registrationUser?: Maybe<UserType>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  typePeople?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationDetailsType = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type PeopleByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<PeopleSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `People`. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PeopleType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `People`. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PeopleType>;
};

export type PeopleFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  corporateName?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isClient?: InputMaybe<Scalars['Boolean']>;
  isConstructor?: InputMaybe<Scalars['Boolean']>;
  isInvestor?: InputMaybe<Scalars['Boolean']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<TypePeopleEnumType>;
};

export type PeopleInputType = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  cellPhone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client?: InputMaybe<Scalars['Boolean']>;
  cnpj?: InputMaybe<Scalars['String']>;
  complement?: InputMaybe<Scalars['String']>;
  constructor?: InputMaybe<Scalars['Boolean']>;
  corporateName: Scalars['String'];
  cpf?: InputMaybe<Scalars['String']>;
  eMail?: InputMaybe<Scalars['String']>;
  fantasyName?: InputMaybe<Scalars['String']>;
  investor?: InputMaybe<Scalars['Boolean']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<TypePeopleEnumType>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type PeopleMutation = {
  __typename?: 'PeopleMutation';
  createPeople?: Maybe<PeopleType>;
  updatePeople?: Maybe<PeopleType>;
};


export type PeopleMutationCreatePeopleArgs = {
  people: PeopleInputType;
};


export type PeopleMutationUpdatePeopleArgs = {
  id: Scalars['Int'];
  people: PeopleInputType;
};

export type PeopleQuery = {
  __typename?: 'PeopleQuery';
  findById?: Maybe<PeopleType>;
  findall?: Maybe<PeopleConnection>;
};


export type PeopleQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type PeopleQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PeopleFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<PeopleByInputType>;
};

export enum PeopleSortingFieldsEnumType {
  Active = 'ACTIVE',
  City = 'CITY',
  Client = 'CLIENT',
  Cnpj = 'CNPJ',
  Constructor = 'CONSTRUCTOR',
  CorporateName = 'CORPORATE_NAME',
  Cpf = 'CPF',
  FantasyName = 'FANTASY_NAME',
  Investor = 'INVESTOR',
  Neighbourhood = 'NEIGHBOURHOOD',
  State = 'STATE',
  TypePeople = 'TYPE_PEOPLE'
}

export type PeopleType = {
  __typename?: 'PeopleType';
  active: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  cellPhone?: Maybe<Scalars['String']>;
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  city?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['Boolean']>;
  cnpj?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  complement?: Maybe<Scalars['String']>;
  constructor?: Maybe<Scalars['Boolean']>;
  corporateName?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  eMail?: Maybe<Scalars['String']>;
  fantasyName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  investor?: Maybe<Scalars['Boolean']>;
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  registrationUser?: Maybe<UserType>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  typePeople?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ProductByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ProductSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Product`. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProductType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Product`. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
};

export type ProductFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ProductInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  detail: Scalars['String'];
};

export type ProductMutation = {
  __typename?: 'ProductMutation';
  createProduct?: Maybe<ProductType>;
  updateProduct?: Maybe<ProductType>;
};


export type ProductMutationCreateProductArgs = {
  product: ProductInputType;
};


export type ProductMutationUpdateProductArgs = {
  id: Scalars['Int'];
  product: ProductInputType;
};

export type ProductProviderByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ProductProviderSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `ProductProvider`. */
export type ProductProviderConnection = {
  __typename?: 'ProductProviderConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductProviderEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProductProviderType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ProductProvider`. */
export type ProductProviderEdge = {
  __typename?: 'ProductProviderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductProviderType>;
};

export type ProductProviderFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  auxiliaryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  providerId?: InputMaybe<Scalars['Int']>;
};

export type ProductProviderInputType = {
  active: Scalars['Boolean'];
  auxiliaryCode: Scalars['String'];
  productId: Scalars['Int'];
  providerId: Scalars['Int'];
};

export type ProductProviderMutation = {
  __typename?: 'ProductProviderMutation';
  createProductProvider?: Maybe<ProductProviderType>;
  updateProductProvider?: Maybe<ProductProviderType>;
};


export type ProductProviderMutationCreateProductProviderArgs = {
  productProvider: ProductProviderInputType;
};


export type ProductProviderMutationUpdateProductProviderArgs = {
  id: Scalars['Int'];
  productProvider: ProductProviderInputType;
};

export type ProductProviderQuery = {
  __typename?: 'ProductProviderQuery';
  findById?: Maybe<ProductProviderType>;
  findall?: Maybe<ProductProviderConnection>;
};


export type ProductProviderQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ProductProviderQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductProviderFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ProductProviderByInputType>;
};

export enum ProductProviderSortingFieldsEnumType {
  AuxiliaryCode = 'AUXILIARY_CODE',
  Id = 'ID'
}

export type ProductProviderType = {
  __typename?: 'ProductProviderType';
  active: Scalars['Boolean'];
  auxiliaryCode: Scalars['String'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  product?: Maybe<ProductType>;
  provider?: Maybe<ProviderType>;
  registrationUser?: Maybe<UserType>;
};

export type ProductQuery = {
  __typename?: 'ProductQuery';
  findById?: Maybe<ProductType>;
  findall?: Maybe<ProductConnection>;
};


export type ProductQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ProductQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ProductByInputType>;
};

export enum ProductSortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type ProductType = {
  __typename?: 'ProductType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
};

export type ProviderByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ProviderSortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Provider`. */
export type ProviderConnection = {
  __typename?: 'ProviderConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProviderEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProviderType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Provider`. */
export type ProviderEdge = {
  __typename?: 'ProviderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProviderType>;
};

export type ProviderFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ProviderInputType = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  cellPhone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  cnpj: Scalars['String'];
  companyId?: InputMaybe<Scalars['Int']>;
  complement?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  eMail?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  neighbourhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  typePeople?: InputMaybe<TypePeopleEnumType>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type ProviderMutation = {
  __typename?: 'ProviderMutation';
  createProvider?: Maybe<ProviderType>;
  updateProvider?: Maybe<ProviderType>;
};


export type ProviderMutationCreateProviderArgs = {
  provider: ProviderInputType;
};


export type ProviderMutationUpdateProviderArgs = {
  id: Scalars['Int'];
  provider: ProviderInputType;
};

export type ProviderQuery = {
  __typename?: 'ProviderQuery';
  findById?: Maybe<ProviderType>;
  findall?: Maybe<ProviderConnection>;
};


export type ProviderQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ProviderQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProviderFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ProviderByInputType>;
};

export enum ProviderSortingFieldsEnumType {
  Active = 'ACTIVE',
  City = 'CITY',
  Cnpj = 'CNPJ',
  Id = 'ID',
  Name = 'NAME',
  Neighbourhood = 'NEIGHBOURHOOD',
  State = 'STATE'
}

export type ProviderType = {
  __typename?: 'ProviderType';
  active: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  cellPhone?: Maybe<Scalars['String']>;
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  city?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  complement?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
  eMail?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  registrationUser?: Maybe<UserType>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  typePeople?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ResponsibilityByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<ResponsibilitySortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Responsibility`. */
export type ResponsibilityConnection = {
  __typename?: 'ResponsibilityConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ResponsibilityEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ResponsibilityType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Responsibility`. */
export type ResponsibilityEdge = {
  __typename?: 'ResponsibilityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ResponsibilityType>;
};

export type ResponsibilityFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ResponsibilityInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
};

export type ResponsibilityMutation = {
  __typename?: 'ResponsibilityMutation';
  createResponsibility?: Maybe<ResponsibilityType>;
  updateResponsibility?: Maybe<ResponsibilityType>;
};


export type ResponsibilityMutationCreateResponsibilityArgs = {
  responsibility: ResponsibilityInputType;
};


export type ResponsibilityMutationUpdateResponsibilityArgs = {
  id: Scalars['Int'];
  responsibility: ResponsibilityInputType;
};

export type ResponsibilityQuery = {
  __typename?: 'ResponsibilityQuery';
  findById?: Maybe<ResponsibilityType>;
  findall?: Maybe<ResponsibilityConnection>;
};


export type ResponsibilityQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type ResponsibilityQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ResponsibilityFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<ResponsibilityByInputType>;
};

export enum ResponsibilitySortingFieldsEnumType {
  Active = 'ACTIVE',
  Description = 'DESCRIPTION',
  Id = 'ID'
}

export type ResponsibilityType = {
  __typename?: 'ResponsibilityType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  registrationUser?: Maybe<UserType>;
};

export enum SortingDirectionEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StatusConstructionEnumType {
  Construcao = 'CONSTRUCAO',
  Finalizada = 'FINALIZADA',
  Vendida = 'VENDIDA'
}

export enum TypeExpenseEnumType {
  DespesaDiversa = 'DESPESA_DIVERSA',
  DespesaFinal = 'DESPESA_FINAL'
}

export enum TypePeopleEnumType {
  Fisica = 'FISICA',
  Juridica = 'JURIDICA'
}

export type UnityByInputType = {
  direction?: InputMaybe<SortingDirectionEnumType>;
  field?: InputMaybe<UnitySortingFieldsEnumType>;
};

/** A connection from an object to a list of objects of type `Unity`. */
export type UnityConnection = {
  __typename?: 'UnityConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<UnityEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<UnityType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Unity`. */
export type UnityEdge = {
  __typename?: 'UnityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UnityType>;
};

export type UnityFilterByInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  multiplier?: InputMaybe<Scalars['Float']>;
};

export type UnityInputType = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  multiplier?: InputMaybe<Scalars['Float']>;
};

export type UnityMutation = {
  __typename?: 'UnityMutation';
  createUnity?: Maybe<UnityType>;
  updateUnity?: Maybe<UnityType>;
};


export type UnityMutationCreateUnityArgs = {
  unity: UnityInputType;
};


export type UnityMutationUpdateUnityArgs = {
  id: Scalars['Int'];
  unity: UnityInputType;
};

export type UnityQuery = {
  __typename?: 'UnityQuery';
  findById?: Maybe<UnityType>;
  findall?: Maybe<UnityConnection>;
};


export type UnityQueryFindByIdArgs = {
  id: Scalars['Int'];
};


export type UnityQueryFindallArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UnityFilterByInputType>;
  first?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<PaginationDetailsType>;
  sort?: InputMaybe<UnityByInputType>;
};

export enum UnitySortingFieldsEnumType {
  Description = 'DESCRIPTION',
  Multiplier = 'MULTIPLIER'
}

export type UnityType = {
  __typename?: 'UnityType';
  active: Scalars['Boolean'];
  changeDate?: Maybe<Scalars['DateTime']>;
  changeUser?: Maybe<UserType>;
  company?: Maybe<CompanyType>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  multiplier?: Maybe<Scalars['Float']>;
  registrationUser?: Maybe<UserType>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  findMe?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  company?: Maybe<CompanyType>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
};

export type CriarMarcaMutationVariables = Exact<{
  input: BrandInputType;
}>;


export type CriarMarcaMutation = { __typename?: 'ObrasMutation', brands?: { __typename?: 'BrandMutation', createBrand?: { __typename?: 'BrandType', id: number } } };

export type CriarConstrucaoMutationVariables = Exact<{
  input: ConstructionInputType;
}>;


export type CriarConstrucaoMutation = { __typename?: 'ObrasMutation', constructions?: { __typename?: 'ConstructionMutation', createConstruction?: { __typename?: 'ConstructionType', id?: number } } };

export type CriarUnidadeResidencialMutationVariables = Exact<{
  input: ConstructionHouseInputType;
}>;


export type CriarUnidadeResidencialMutation = { __typename?: 'ObrasMutation', constructionHouse?: { __typename?: 'ConstructionHouseMutation', createConstructionHouse?: { __typename?: 'ConstructionHouseType', id: number } } };

export type CriarVinculoClienteConstrucaoMutationVariables = Exact<{
  input: ConstructionInvestorInputType;
}>;


export type CriarVinculoClienteConstrucaoMutation = { __typename?: 'ObrasMutation', constructionInvestors?: { __typename?: 'ConstructionInvestorMutation', createConstructionInvestor?: { __typename?: 'ConstructionInvestorType', id: number } } };

export type CriarDocumentoMutationVariables = Exact<{
  input: DocumentationInputType;
}>;


export type CriarDocumentoMutation = { __typename?: 'ObrasMutation', documentations?: { __typename?: 'DocumentationMutation', createDocumentation?: { __typename?: 'DocumentationType', id: number } } };

export type CriarDespesaMutationVariables = Exact<{
  input: ExpenseInputType;
}>;


export type CriarDespesaMutation = { __typename?: 'ObrasMutation', expenses?: { __typename?: 'ExpenseMutation', createExpense?: { __typename?: 'ExpenseType', id: number } } };

export type CriarGrupoProdutoMutationVariables = Exact<{
  input: GroupInputType;
}>;


export type CriarGrupoProdutoMutation = { __typename?: 'ObrasMutation', group?: { __typename?: 'GroupMutation', createGroup?: { __typename?: 'GroupType', id: number } } };

export type CriarTercerizadoMutationVariables = Exact<{
  input: OutsourcedInputType;
}>;


export type CriarTercerizadoMutation = { __typename?: 'ObrasMutation', outsourceds?: { __typename?: 'OutsourcedMutation', createOutsourced?: { __typename?: 'OutsourcedType', id: number } } };

export type CriarPessoaMutationVariables = Exact<{
  input: PeopleInputType;
}>;


export type CriarPessoaMutation = { __typename?: 'ObrasMutation', peoples?: { __typename?: 'PeopleMutation', createPeople?: { __typename?: 'PeopleType', id: number } } };

export type CriarProdutoMutationVariables = Exact<{
  input: ProductInputType;
}>;


export type CriarProdutoMutation = { __typename?: 'ObrasMutation', products?: { __typename?: 'ProductMutation', createProduct?: { __typename?: 'ProductType', id: number } } };

export type CriarFornecedorMutationVariables = Exact<{
  input: ProviderInputType;
}>;


export type CriarFornecedorMutation = { __typename?: 'ObrasMutation', providers?: { __typename?: 'ProviderMutation', createProvider?: { __typename?: 'ProviderType', id: number } } };

export type CriarCargoMutationVariables = Exact<{
  input: ResponsibilityInputType;
}>;


export type CriarCargoMutation = { __typename?: 'ObrasMutation', responsibilities?: { __typename?: 'ResponsibilityMutation', createResponsibility?: { __typename?: 'ResponsibilityType', id: number } } };

export type CriarUnidadeMutationVariables = Exact<{
  input: UnityInputType;
}>;


export type CriarUnidadeMutation = { __typename?: 'ObrasMutation', unity?: { __typename?: 'UnityMutation', createUnity?: { __typename?: 'UnityType', id: number } } };

export type EditarConstrucaoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ConstructionInputType;
}>;


export type EditarConstrucaoMutation = { __typename?: 'ObrasMutation', constructions?: { __typename?: 'ConstructionMutation', updateConstruction?: { __typename?: 'ConstructionType', id?: number } } };

export type EditarUnidadeResindecialMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ConstructionHouseInputType;
}>;


export type EditarUnidadeResindecialMutation = { __typename?: 'ObrasMutation', constructionHouse?: { __typename?: 'ConstructionHouseMutation', updateConstructionHouse?: { __typename?: 'ConstructionHouseType', id: number } } };

export type EditarVinculoClienteConstrucaoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ConstructionInvestorInputType;
}>;


export type EditarVinculoClienteConstrucaoMutation = { __typename?: 'ObrasMutation', constructionInvestors?: { __typename?: 'ConstructionInvestorMutation', updateConstructionInvestor?: { __typename?: 'ConstructionInvestorType', id: number } } };

export type EditarDocumentoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: DocumentationInputType;
}>;


export type EditarDocumentoMutation = { __typename?: 'ObrasMutation', documentations?: { __typename?: 'DocumentationMutation', updateDocumentation?: { __typename?: 'DocumentationType', id: number } } };

export type EditarDespesaMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ExpenseInputType;
}>;


export type EditarDespesaMutation = { __typename?: 'ObrasMutation', expenses?: { __typename?: 'ExpenseMutation', updateExpense?: { __typename?: 'ExpenseType', id: number } } };

export type EditarGrupoProdutoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: GroupInputType;
}>;


export type EditarGrupoProdutoMutation = { __typename?: 'ObrasMutation', group?: { __typename?: 'GroupMutation', updateGroup?: { __typename?: 'GroupType', id: number } } };

export type EditarTercerizadoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: OutsourcedInputType;
}>;


export type EditarTercerizadoMutation = { __typename?: 'ObrasMutation', outsourceds?: { __typename?: 'OutsourcedMutation', updateOutsourced?: { __typename?: 'OutsourcedType', id: number } } };

export type EditarPessoaMutationVariables = Exact<{
  id: Scalars['Int'];
  input: PeopleInputType;
}>;


export type EditarPessoaMutation = { __typename?: 'ObrasMutation', peoples?: { __typename?: 'PeopleMutation', updatePeople?: { __typename?: 'PeopleType', id: number } } };

export type EditarProdutoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ProductInputType;
}>;


export type EditarProdutoMutation = { __typename?: 'ObrasMutation', products?: { __typename?: 'ProductMutation', updateProduct?: { __typename?: 'ProductType', id: number } } };

export type EditarFornecedorMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ProviderInputType;
}>;


export type EditarFornecedorMutation = { __typename?: 'ObrasMutation', providers?: { __typename?: 'ProviderMutation', updateProvider?: { __typename?: 'ProviderType', id: number } } };

export type EditarCargoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ResponsibilityInputType;
}>;


export type EditarCargoMutation = { __typename?: 'ObrasMutation', responsibilities?: { __typename?: 'ResponsibilityMutation', updateResponsibility?: { __typename?: 'ResponsibilityType', id: number } } };

export type EditarUnidadeMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UnityInputType;
}>;


export type EditarUnidadeMutation = { __typename?: 'ObrasMutation', unity?: { __typename?: 'UnityMutation', updateUnity?: { __typename?: 'UnityType', id: number } } };

export type EditarMarcaMutationVariables = Exact<{
  id: Scalars['Int'];
  input: BrandInputType;
}>;


export type EditarMarcaMutation = { __typename?: 'ObrasMutation', brands?: { __typename?: 'BrandMutation', updateBrand?: { __typename?: 'BrandType', id: number } } };

export type GetMarcaByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMarcaByIdQuery = { __typename?: 'ObrasQuery', brands?: { __typename?: 'BrandQuery', findById?: { __typename?: 'BrandType', id: number, description?: string, changeDate?: any, active: boolean } } };

export type GetMarcasQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<BrandFilterByInputType>;
  sort?: InputMaybe<BrandByInputType>;
}>;


export type GetMarcasQuery = { __typename?: 'ObrasQuery', brands?: { __typename?: 'BrandQuery', findall?: { __typename?: 'BrandConnection', totalCount?: number, items?: Array<{ __typename?: 'BrandType', id: number, description?: string, creationDate?: any, changeDate?: any, active: boolean, company?: { __typename?: 'CompanyType', id: number, corporateName?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetObraByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetObraByIdQuery = { __typename?: 'ObrasQuery', constructions?: { __typename?: 'ConstructionQuery', findById?: { __typename?: 'ConstructionType', id?: number, address: string, art?: number, batchArea?: number, buildingArea?: number, city: string, cno?: number, complement: string, dateBegin: any, dateEnd?: any, identifier: string, latitude?: number, license?: number, longitude?: number, motherEnrollment?: number, municipalRegistration?: number, neighbourhood?: string, number?: string, saleValue?: number, state: string, undergroundUse?: number, zipCode?: string, active: boolean, statusConstruction?: string } } };

export type GetUnidadeResidencialByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUnidadeResidencialByIdQuery = { __typename?: 'ObrasQuery', constructionHouses?: { __typename?: 'ConstructionHouseQuery', findById?: { __typename?: 'ConstructionHouseType', id: number, description: string, constructionId?: number, permeableArea?: number, fractionBatch?: number, buildingArea?: number, energyConsumptionUnit?: string, saleValue?: number, waterConsumptionUnit?: string, active: boolean, construction?: { __typename?: 'ConstructionType', id?: number } } } };

export type GetUnidadeResidencialsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ConstructionHouseFilterByInputType>;
  sort?: InputMaybe<ConstructionHouseByInputType>;
}>;


export type GetUnidadeResidencialsQuery = { __typename?: 'ObrasQuery', constructionHouses?: { __typename?: 'ConstructionHouseQuery', findall?: { __typename?: 'ConstructionHouseConnection', totalCount?: number, items?: Array<{ __typename?: 'ConstructionHouseType', id: number, description: string, constructionId?: number, permeableArea?: number, fractionBatch?: number, buildingArea?: number, energyConsumptionUnit?: string, saleValue?: number, waterConsumptionUnit?: string, active: boolean, construction?: { __typename?: 'ConstructionType', id?: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetVinculoClientesObraByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetVinculoClientesObraByIdQuery = { __typename?: 'ObrasQuery', constructionInvestors?: { __typename?: 'ConstructionInvestorQuery', findById?: { __typename?: 'ConstructionInvestorType', id: number, peopleId?: number, constructionId?: number, active: boolean, people?: { __typename?: 'PeopleType', id: number, fantasyName?: string, cnpj?: string, cpf?: string, typePeople?: string } } } };

export type GetVinculoClientesObraQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ConstructionInvestorFilterByInputType>;
  sort?: InputMaybe<ConstructionInvestorByInputType>;
}>;


export type GetVinculoClientesObraQuery = { __typename?: 'ObrasQuery', constructionInvestors?: { __typename?: 'ConstructionInvestorQuery', findall?: { __typename?: 'ConstructionInvestorConnection', totalCount?: number, items?: Array<{ __typename?: 'ConstructionInvestorType', id: number, peopleId?: number, constructionId?: number, active: boolean, people?: { __typename?: 'PeopleType', id: number, fantasyName?: string, cnpj?: string, cpf?: string, typePeople?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetObrasQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ConstructionFilterByInputType>;
  sort?: InputMaybe<ConstructionByInputType>;
}>;


export type GetObrasQuery = { __typename?: 'ObrasQuery', constructions?: { __typename?: 'ConstructionQuery', findall?: { __typename?: 'ConstructionConnection', totalCount?: number, items?: Array<{ __typename?: 'ConstructionType', id?: number, address: string, art?: number, batchArea?: number, buildingArea?: number, city: string, cno?: number, complement: string, dateBegin: any, dateEnd?: any, identifier: string, latitude?: number, license?: number, longitude?: number, motherEnrollment?: number, municipalRegistration?: number, neighbourhood?: string, number?: string, saleValue?: number, state: string, undergroundUse?: number, zipCode?: string, active: boolean, statusConstruction?: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetDocumentacaoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetDocumentacaoByIdQuery = { __typename?: 'ObrasQuery', documentations?: { __typename?: 'DocumentationQuery', findById?: { __typename?: 'DocumentationType', id: number, description?: string, creationDate?: any, changeDate?: any, active: boolean } } };

export type GetDocumentosQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<DocumentationFilterByInputType>;
  sort?: InputMaybe<DocumentationByInputType>;
}>;


export type GetDocumentosQuery = { __typename?: 'ObrasQuery', documentations?: { __typename?: 'DocumentationQuery', findall?: { __typename?: 'DocumentationConnection', totalCount?: number, items?: Array<{ __typename?: 'DocumentationType', id: number, description?: string, creationDate?: any, changeDate?: any, active: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetDespesaByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetDespesaByIdQuery = { __typename?: 'ObrasQuery', expenses?: { __typename?: 'ExpenseQuery', findById?: { __typename?: 'ExpenseType', id: number, description?: string, changeDate?: any, active: boolean } } };

export type GetDespesasQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ExpenseFilterByInputType>;
  sort?: InputMaybe<ExpenseByInputType>;
}>;


export type GetDespesasQuery = { __typename?: 'ObrasQuery', expenses?: { __typename?: 'ExpenseQuery', findall?: { __typename?: 'ExpenseConnection', totalCount?: number, items?: Array<{ __typename?: 'ExpenseType', id: number, description?: string, creationDate?: any, changeDate?: any, active: boolean, company?: { __typename?: 'CompanyType', id: number, corporateName?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetGrupoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetGrupoByIdQuery = { __typename?: 'ObrasQuery', group?: { __typename?: 'GroupQuery', findById?: { __typename?: 'GroupType', id: number, description?: string, changeDate?: any, active: boolean } } };

export type GetGruposProdutoQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<GroupFilterByInputType>;
  sort?: InputMaybe<GroupByInputType>;
}>;


export type GetGruposProdutoQuery = { __typename?: 'ObrasQuery', group?: { __typename?: 'GroupQuery', findall?: { __typename?: 'GroupConnection', totalCount?: number, items?: Array<{ __typename?: 'GroupType', id: number, description?: string, creationDate?: any, changeDate?: any, active: boolean, company?: { __typename?: 'CompanyType', id: number, corporateName?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetTerceirizadoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTerceirizadoByIdQuery = { __typename?: 'ObrasQuery', outsourceds?: { __typename?: 'OutsourcedQuery', findById?: { __typename?: 'OutsourcedType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, cpf?: string, complement?: string, corporateName?: string, eMail?: string, fantasyName?: string, typePeople?: string } } };

export type GetTerceirizadosQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<OutsourcedFilterByInputType>;
  sort?: InputMaybe<OutsourcedByInputType>;
}>;


export type GetTerceirizadosQuery = { __typename?: 'ObrasQuery', outsourceds?: { __typename?: 'OutsourcedQuery', findall?: { __typename?: 'OutsourcedConnection', totalCount?: number, items?: Array<{ __typename?: 'OutsourcedType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, cpf?: string, complement?: string, corporateName?: string, eMail?: string, fantasyName?: string, typePeople?: string, company?: { __typename?: 'CompanyType', id: number, corporateName?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetPessoaIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPessoaIdQuery = { __typename?: 'ObrasQuery', peoples?: { __typename?: 'PeopleQuery', findById?: { __typename?: 'PeopleType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, cpf?: string, complement?: string, corporateName?: string, eMail?: string, fantasyName?: string, typePeople?: string, constructor?: boolean, client?: boolean, investor?: boolean } } };

export type GetPessoasQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<PeopleFilterByInputType>;
  sort?: InputMaybe<PeopleByInputType>;
}>;


export type GetPessoasQuery = { __typename?: 'ObrasQuery', peoples?: { __typename?: 'PeopleQuery', findall?: { __typename?: 'PeopleConnection', totalCount?: number, items?: Array<{ __typename?: 'PeopleType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, complement?: string, fantasyName?: string, corporateName?: string, eMail?: string, constructor?: boolean, client?: boolean, investor?: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetProdutoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProdutoByIdQuery = { __typename?: 'ObrasQuery', products?: { __typename?: 'ProductQuery', findById?: { __typename?: 'ProductType', id: number, detail?: string, description?: string, changeDate?: any, active: boolean } } };

export type GetProdutosQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ProductFilterByInputType>;
  sort?: InputMaybe<ProductByInputType>;
}>;


export type GetProdutosQuery = { __typename?: 'ObrasQuery', products?: { __typename?: 'ProductQuery', findall?: { __typename?: 'ProductConnection', totalCount?: number, items?: Array<{ __typename?: 'ProductType', id: number, detail?: string, description?: string, changeDate?: any, active: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetFornecedorByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetFornecedorByIdQuery = { __typename?: 'ObrasQuery', providers?: { __typename?: 'ProviderQuery', findById?: { __typename?: 'ProviderType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, cpf?: string, typePeople?: string, complement?: string, name?: string, eMail?: string } } };

export type GetFornecedoresQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ProviderFilterByInputType>;
  sort?: InputMaybe<ProviderByInputType>;
}>;


export type GetFornecedoresQuery = { __typename?: 'ObrasQuery', providers?: { __typename?: 'ProviderQuery', findall?: { __typename?: 'ProviderConnection', totalCount?: number, items?: Array<{ __typename?: 'ProviderType', id: number, neighbourhood?: string, number?: string, state?: string, telephone?: string, zipCode?: string, active: boolean, address?: string, cellPhone?: string, city?: string, cnpj?: string, complement?: string, name?: string, eMail?: string, company?: { __typename?: 'CompanyType', id: number, corporateName?: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetCargoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCargoByIdQuery = { __typename?: 'ObrasQuery', responsibilities?: { __typename?: 'ResponsibilityQuery', findById?: { __typename?: 'ResponsibilityType', id: number, description?: string, changeDate?: any, active: boolean } } };

export type GetCargosQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<ResponsibilityFilterByInputType>;
  sort?: InputMaybe<ResponsibilityByInputType>;
}>;


export type GetCargosQuery = { __typename?: 'ObrasQuery', responsibilities?: { __typename?: 'ResponsibilityQuery', findall?: { __typename?: 'ResponsibilityConnection', totalCount?: number, items?: Array<{ __typename?: 'ResponsibilityType', id: number, description?: string, changeDate?: any, active: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetUnidadeByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUnidadeByIdQuery = { __typename?: 'ObrasQuery', unity?: { __typename?: 'UnityQuery', findById?: { __typename?: 'UnityType', id: number, description?: string, multiplier?: number, active: boolean } } };

export type GetUnidadesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDetailsType>;
  filter?: InputMaybe<UnityFilterByInputType>;
  sort?: InputMaybe<UnityByInputType>;
}>;


export type GetUnidadesQuery = { __typename?: 'ObrasQuery', unity?: { __typename?: 'UnityQuery', findall?: { __typename?: 'UnityConnection', totalCount?: number, items?: Array<{ __typename?: 'UnityType', id: number, description?: string, multiplier?: number, active: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string, endCursor?: string } } } };

export type GetUserMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMeQuery = { __typename?: 'ObrasQuery', user?: { __typename?: 'UserQuery', findMe?: { __typename?: 'UserType', id: string, userName: string, phoneNumber?: string, email?: string, company?: { __typename?: 'CompanyType', id: number, corporateName?: string, fantasyName?: string, cnpj?: string } } } };


export const CriarMarcaDocument = gql`
    mutation CriarMarca($input: BrandInputType!) {
  brands {
    createBrand(brand: $input) {
      id
    }
  }
}
    `;
export type CriarMarcaMutationFn = Apollo.MutationFunction<CriarMarcaMutation, CriarMarcaMutationVariables>;

/**
 * __useCriarMarcaMutation__
 *
 * To run a mutation, you first call `useCriarMarcaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarMarcaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarMarcaMutation, { data, loading, error }] = useCriarMarcaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarMarcaMutation(baseOptions?: Apollo.MutationHookOptions<CriarMarcaMutation, CriarMarcaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarMarcaMutation, CriarMarcaMutationVariables>(CriarMarcaDocument, options);
      }
export type CriarMarcaMutationHookResult = ReturnType<typeof useCriarMarcaMutation>;
export type CriarMarcaMutationResult = Apollo.MutationResult<CriarMarcaMutation>;
export type CriarMarcaMutationOptions = Apollo.BaseMutationOptions<CriarMarcaMutation, CriarMarcaMutationVariables>;
export const CriarConstrucaoDocument = gql`
    mutation CriarConstrucao($input: ConstructionInputType!) {
  constructions {
    createConstruction(construction: $input) {
      id
    }
  }
}
    `;
export type CriarConstrucaoMutationFn = Apollo.MutationFunction<CriarConstrucaoMutation, CriarConstrucaoMutationVariables>;

/**
 * __useCriarConstrucaoMutation__
 *
 * To run a mutation, you first call `useCriarConstrucaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarConstrucaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarConstrucaoMutation, { data, loading, error }] = useCriarConstrucaoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarConstrucaoMutation(baseOptions?: Apollo.MutationHookOptions<CriarConstrucaoMutation, CriarConstrucaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarConstrucaoMutation, CriarConstrucaoMutationVariables>(CriarConstrucaoDocument, options);
      }
export type CriarConstrucaoMutationHookResult = ReturnType<typeof useCriarConstrucaoMutation>;
export type CriarConstrucaoMutationResult = Apollo.MutationResult<CriarConstrucaoMutation>;
export type CriarConstrucaoMutationOptions = Apollo.BaseMutationOptions<CriarConstrucaoMutation, CriarConstrucaoMutationVariables>;
export const CriarUnidadeResidencialDocument = gql`
    mutation CriarUnidadeResidencial($input: ConstructionHouseInputType!) {
  constructionHouse {
    createConstructionHouse(constructionHouse: $input) {
      id
    }
  }
}
    `;
export type CriarUnidadeResidencialMutationFn = Apollo.MutationFunction<CriarUnidadeResidencialMutation, CriarUnidadeResidencialMutationVariables>;

/**
 * __useCriarUnidadeResidencialMutation__
 *
 * To run a mutation, you first call `useCriarUnidadeResidencialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarUnidadeResidencialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarUnidadeResidencialMutation, { data, loading, error }] = useCriarUnidadeResidencialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarUnidadeResidencialMutation(baseOptions?: Apollo.MutationHookOptions<CriarUnidadeResidencialMutation, CriarUnidadeResidencialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarUnidadeResidencialMutation, CriarUnidadeResidencialMutationVariables>(CriarUnidadeResidencialDocument, options);
      }
export type CriarUnidadeResidencialMutationHookResult = ReturnType<typeof useCriarUnidadeResidencialMutation>;
export type CriarUnidadeResidencialMutationResult = Apollo.MutationResult<CriarUnidadeResidencialMutation>;
export type CriarUnidadeResidencialMutationOptions = Apollo.BaseMutationOptions<CriarUnidadeResidencialMutation, CriarUnidadeResidencialMutationVariables>;
export const CriarVinculoClienteConstrucaoDocument = gql`
    mutation CriarVinculoClienteConstrucao($input: ConstructionInvestorInputType!) {
  constructionInvestors {
    createConstructionInvestor(constructionInvestor: $input) {
      id
    }
  }
}
    `;
export type CriarVinculoClienteConstrucaoMutationFn = Apollo.MutationFunction<CriarVinculoClienteConstrucaoMutation, CriarVinculoClienteConstrucaoMutationVariables>;

/**
 * __useCriarVinculoClienteConstrucaoMutation__
 *
 * To run a mutation, you first call `useCriarVinculoClienteConstrucaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarVinculoClienteConstrucaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarVinculoClienteConstrucaoMutation, { data, loading, error }] = useCriarVinculoClienteConstrucaoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarVinculoClienteConstrucaoMutation(baseOptions?: Apollo.MutationHookOptions<CriarVinculoClienteConstrucaoMutation, CriarVinculoClienteConstrucaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarVinculoClienteConstrucaoMutation, CriarVinculoClienteConstrucaoMutationVariables>(CriarVinculoClienteConstrucaoDocument, options);
      }
export type CriarVinculoClienteConstrucaoMutationHookResult = ReturnType<typeof useCriarVinculoClienteConstrucaoMutation>;
export type CriarVinculoClienteConstrucaoMutationResult = Apollo.MutationResult<CriarVinculoClienteConstrucaoMutation>;
export type CriarVinculoClienteConstrucaoMutationOptions = Apollo.BaseMutationOptions<CriarVinculoClienteConstrucaoMutation, CriarVinculoClienteConstrucaoMutationVariables>;
export const CriarDocumentoDocument = gql`
    mutation CriarDocumento($input: DocumentationInputType!) {
  documentations {
    createDocumentation(documentation: $input) {
      id
    }
  }
}
    `;
export type CriarDocumentoMutationFn = Apollo.MutationFunction<CriarDocumentoMutation, CriarDocumentoMutationVariables>;

/**
 * __useCriarDocumentoMutation__
 *
 * To run a mutation, you first call `useCriarDocumentoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarDocumentoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarDocumentoMutation, { data, loading, error }] = useCriarDocumentoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarDocumentoMutation(baseOptions?: Apollo.MutationHookOptions<CriarDocumentoMutation, CriarDocumentoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarDocumentoMutation, CriarDocumentoMutationVariables>(CriarDocumentoDocument, options);
      }
export type CriarDocumentoMutationHookResult = ReturnType<typeof useCriarDocumentoMutation>;
export type CriarDocumentoMutationResult = Apollo.MutationResult<CriarDocumentoMutation>;
export type CriarDocumentoMutationOptions = Apollo.BaseMutationOptions<CriarDocumentoMutation, CriarDocumentoMutationVariables>;
export const CriarDespesaDocument = gql`
    mutation CriarDespesa($input: ExpenseInputType!) {
  expenses {
    createExpense(expense: $input) {
      id
    }
  }
}
    `;
export type CriarDespesaMutationFn = Apollo.MutationFunction<CriarDespesaMutation, CriarDespesaMutationVariables>;

/**
 * __useCriarDespesaMutation__
 *
 * To run a mutation, you first call `useCriarDespesaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarDespesaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarDespesaMutation, { data, loading, error }] = useCriarDespesaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarDespesaMutation(baseOptions?: Apollo.MutationHookOptions<CriarDespesaMutation, CriarDespesaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarDespesaMutation, CriarDespesaMutationVariables>(CriarDespesaDocument, options);
      }
export type CriarDespesaMutationHookResult = ReturnType<typeof useCriarDespesaMutation>;
export type CriarDespesaMutationResult = Apollo.MutationResult<CriarDespesaMutation>;
export type CriarDespesaMutationOptions = Apollo.BaseMutationOptions<CriarDespesaMutation, CriarDespesaMutationVariables>;
export const CriarGrupoProdutoDocument = gql`
    mutation CriarGrupoProduto($input: GroupInputType!) {
  group {
    createGroup(group: $input) {
      id
    }
  }
}
    `;
export type CriarGrupoProdutoMutationFn = Apollo.MutationFunction<CriarGrupoProdutoMutation, CriarGrupoProdutoMutationVariables>;

/**
 * __useCriarGrupoProdutoMutation__
 *
 * To run a mutation, you first call `useCriarGrupoProdutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarGrupoProdutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarGrupoProdutoMutation, { data, loading, error }] = useCriarGrupoProdutoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarGrupoProdutoMutation(baseOptions?: Apollo.MutationHookOptions<CriarGrupoProdutoMutation, CriarGrupoProdutoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarGrupoProdutoMutation, CriarGrupoProdutoMutationVariables>(CriarGrupoProdutoDocument, options);
      }
export type CriarGrupoProdutoMutationHookResult = ReturnType<typeof useCriarGrupoProdutoMutation>;
export type CriarGrupoProdutoMutationResult = Apollo.MutationResult<CriarGrupoProdutoMutation>;
export type CriarGrupoProdutoMutationOptions = Apollo.BaseMutationOptions<CriarGrupoProdutoMutation, CriarGrupoProdutoMutationVariables>;
export const CriarTercerizadoDocument = gql`
    mutation CriarTercerizado($input: OutsourcedInputType!) {
  outsourceds {
    createOutsourced(outsourced: $input) {
      id
    }
  }
}
    `;
export type CriarTercerizadoMutationFn = Apollo.MutationFunction<CriarTercerizadoMutation, CriarTercerizadoMutationVariables>;

/**
 * __useCriarTercerizadoMutation__
 *
 * To run a mutation, you first call `useCriarTercerizadoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarTercerizadoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarTercerizadoMutation, { data, loading, error }] = useCriarTercerizadoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarTercerizadoMutation(baseOptions?: Apollo.MutationHookOptions<CriarTercerizadoMutation, CriarTercerizadoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarTercerizadoMutation, CriarTercerizadoMutationVariables>(CriarTercerizadoDocument, options);
      }
export type CriarTercerizadoMutationHookResult = ReturnType<typeof useCriarTercerizadoMutation>;
export type CriarTercerizadoMutationResult = Apollo.MutationResult<CriarTercerizadoMutation>;
export type CriarTercerizadoMutationOptions = Apollo.BaseMutationOptions<CriarTercerizadoMutation, CriarTercerizadoMutationVariables>;
export const CriarPessoaDocument = gql`
    mutation CriarPessoa($input: PeopleInputType!) {
  peoples {
    createPeople(people: $input) {
      id
    }
  }
}
    `;
export type CriarPessoaMutationFn = Apollo.MutationFunction<CriarPessoaMutation, CriarPessoaMutationVariables>;

/**
 * __useCriarPessoaMutation__
 *
 * To run a mutation, you first call `useCriarPessoaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarPessoaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarPessoaMutation, { data, loading, error }] = useCriarPessoaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarPessoaMutation(baseOptions?: Apollo.MutationHookOptions<CriarPessoaMutation, CriarPessoaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarPessoaMutation, CriarPessoaMutationVariables>(CriarPessoaDocument, options);
      }
export type CriarPessoaMutationHookResult = ReturnType<typeof useCriarPessoaMutation>;
export type CriarPessoaMutationResult = Apollo.MutationResult<CriarPessoaMutation>;
export type CriarPessoaMutationOptions = Apollo.BaseMutationOptions<CriarPessoaMutation, CriarPessoaMutationVariables>;
export const CriarProdutoDocument = gql`
    mutation CriarProduto($input: ProductInputType!) {
  products {
    createProduct(product: $input) {
      id
    }
  }
}
    `;
export type CriarProdutoMutationFn = Apollo.MutationFunction<CriarProdutoMutation, CriarProdutoMutationVariables>;

/**
 * __useCriarProdutoMutation__
 *
 * To run a mutation, you first call `useCriarProdutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarProdutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarProdutoMutation, { data, loading, error }] = useCriarProdutoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarProdutoMutation(baseOptions?: Apollo.MutationHookOptions<CriarProdutoMutation, CriarProdutoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarProdutoMutation, CriarProdutoMutationVariables>(CriarProdutoDocument, options);
      }
export type CriarProdutoMutationHookResult = ReturnType<typeof useCriarProdutoMutation>;
export type CriarProdutoMutationResult = Apollo.MutationResult<CriarProdutoMutation>;
export type CriarProdutoMutationOptions = Apollo.BaseMutationOptions<CriarProdutoMutation, CriarProdutoMutationVariables>;
export const CriarFornecedorDocument = gql`
    mutation CriarFornecedor($input: ProviderInputType!) {
  providers {
    createProvider(provider: $input) {
      id
    }
  }
}
    `;
export type CriarFornecedorMutationFn = Apollo.MutationFunction<CriarFornecedorMutation, CriarFornecedorMutationVariables>;

/**
 * __useCriarFornecedorMutation__
 *
 * To run a mutation, you first call `useCriarFornecedorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarFornecedorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarFornecedorMutation, { data, loading, error }] = useCriarFornecedorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarFornecedorMutation(baseOptions?: Apollo.MutationHookOptions<CriarFornecedorMutation, CriarFornecedorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarFornecedorMutation, CriarFornecedorMutationVariables>(CriarFornecedorDocument, options);
      }
export type CriarFornecedorMutationHookResult = ReturnType<typeof useCriarFornecedorMutation>;
export type CriarFornecedorMutationResult = Apollo.MutationResult<CriarFornecedorMutation>;
export type CriarFornecedorMutationOptions = Apollo.BaseMutationOptions<CriarFornecedorMutation, CriarFornecedorMutationVariables>;
export const CriarCargoDocument = gql`
    mutation CriarCargo($input: ResponsibilityInputType!) {
  responsibilities {
    createResponsibility(responsibility: $input) {
      id
    }
  }
}
    `;
export type CriarCargoMutationFn = Apollo.MutationFunction<CriarCargoMutation, CriarCargoMutationVariables>;

/**
 * __useCriarCargoMutation__
 *
 * To run a mutation, you first call `useCriarCargoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarCargoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarCargoMutation, { data, loading, error }] = useCriarCargoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarCargoMutation(baseOptions?: Apollo.MutationHookOptions<CriarCargoMutation, CriarCargoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarCargoMutation, CriarCargoMutationVariables>(CriarCargoDocument, options);
      }
export type CriarCargoMutationHookResult = ReturnType<typeof useCriarCargoMutation>;
export type CriarCargoMutationResult = Apollo.MutationResult<CriarCargoMutation>;
export type CriarCargoMutationOptions = Apollo.BaseMutationOptions<CriarCargoMutation, CriarCargoMutationVariables>;
export const CriarUnidadeDocument = gql`
    mutation CriarUnidade($input: UnityInputType!) {
  unity {
    createUnity(unity: $input) {
      id
    }
  }
}
    `;
export type CriarUnidadeMutationFn = Apollo.MutationFunction<CriarUnidadeMutation, CriarUnidadeMutationVariables>;

/**
 * __useCriarUnidadeMutation__
 *
 * To run a mutation, you first call `useCriarUnidadeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarUnidadeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarUnidadeMutation, { data, loading, error }] = useCriarUnidadeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCriarUnidadeMutation(baseOptions?: Apollo.MutationHookOptions<CriarUnidadeMutation, CriarUnidadeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarUnidadeMutation, CriarUnidadeMutationVariables>(CriarUnidadeDocument, options);
      }
export type CriarUnidadeMutationHookResult = ReturnType<typeof useCriarUnidadeMutation>;
export type CriarUnidadeMutationResult = Apollo.MutationResult<CriarUnidadeMutation>;
export type CriarUnidadeMutationOptions = Apollo.BaseMutationOptions<CriarUnidadeMutation, CriarUnidadeMutationVariables>;
export const EditarConstrucaoDocument = gql`
    mutation EditarConstrucao($id: Int!, $input: ConstructionInputType!) {
  constructions {
    updateConstruction(id: $id, construction: $input) {
      id
    }
  }
}
    `;
export type EditarConstrucaoMutationFn = Apollo.MutationFunction<EditarConstrucaoMutation, EditarConstrucaoMutationVariables>;

/**
 * __useEditarConstrucaoMutation__
 *
 * To run a mutation, you first call `useEditarConstrucaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarConstrucaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarConstrucaoMutation, { data, loading, error }] = useEditarConstrucaoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarConstrucaoMutation(baseOptions?: Apollo.MutationHookOptions<EditarConstrucaoMutation, EditarConstrucaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarConstrucaoMutation, EditarConstrucaoMutationVariables>(EditarConstrucaoDocument, options);
      }
export type EditarConstrucaoMutationHookResult = ReturnType<typeof useEditarConstrucaoMutation>;
export type EditarConstrucaoMutationResult = Apollo.MutationResult<EditarConstrucaoMutation>;
export type EditarConstrucaoMutationOptions = Apollo.BaseMutationOptions<EditarConstrucaoMutation, EditarConstrucaoMutationVariables>;
export const EditarUnidadeResindecialDocument = gql`
    mutation EditarUnidadeResindecial($id: Int!, $input: ConstructionHouseInputType!) {
  constructionHouse {
    updateConstructionHouse(id: $id, constructionHouse: $input) {
      id
    }
  }
}
    `;
export type EditarUnidadeResindecialMutationFn = Apollo.MutationFunction<EditarUnidadeResindecialMutation, EditarUnidadeResindecialMutationVariables>;

/**
 * __useEditarUnidadeResindecialMutation__
 *
 * To run a mutation, you first call `useEditarUnidadeResindecialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarUnidadeResindecialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarUnidadeResindecialMutation, { data, loading, error }] = useEditarUnidadeResindecialMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarUnidadeResindecialMutation(baseOptions?: Apollo.MutationHookOptions<EditarUnidadeResindecialMutation, EditarUnidadeResindecialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarUnidadeResindecialMutation, EditarUnidadeResindecialMutationVariables>(EditarUnidadeResindecialDocument, options);
      }
export type EditarUnidadeResindecialMutationHookResult = ReturnType<typeof useEditarUnidadeResindecialMutation>;
export type EditarUnidadeResindecialMutationResult = Apollo.MutationResult<EditarUnidadeResindecialMutation>;
export type EditarUnidadeResindecialMutationOptions = Apollo.BaseMutationOptions<EditarUnidadeResindecialMutation, EditarUnidadeResindecialMutationVariables>;
export const EditarVinculoClienteConstrucaoDocument = gql`
    mutation EditarVinculoClienteConstrucao($id: Int!, $input: ConstructionInvestorInputType!) {
  constructionInvestors {
    updateConstructionInvestor(id: $id, constructionInvestor: $input) {
      id
    }
  }
}
    `;
export type EditarVinculoClienteConstrucaoMutationFn = Apollo.MutationFunction<EditarVinculoClienteConstrucaoMutation, EditarVinculoClienteConstrucaoMutationVariables>;

/**
 * __useEditarVinculoClienteConstrucaoMutation__
 *
 * To run a mutation, you first call `useEditarVinculoClienteConstrucaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarVinculoClienteConstrucaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarVinculoClienteConstrucaoMutation, { data, loading, error }] = useEditarVinculoClienteConstrucaoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarVinculoClienteConstrucaoMutation(baseOptions?: Apollo.MutationHookOptions<EditarVinculoClienteConstrucaoMutation, EditarVinculoClienteConstrucaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarVinculoClienteConstrucaoMutation, EditarVinculoClienteConstrucaoMutationVariables>(EditarVinculoClienteConstrucaoDocument, options);
      }
export type EditarVinculoClienteConstrucaoMutationHookResult = ReturnType<typeof useEditarVinculoClienteConstrucaoMutation>;
export type EditarVinculoClienteConstrucaoMutationResult = Apollo.MutationResult<EditarVinculoClienteConstrucaoMutation>;
export type EditarVinculoClienteConstrucaoMutationOptions = Apollo.BaseMutationOptions<EditarVinculoClienteConstrucaoMutation, EditarVinculoClienteConstrucaoMutationVariables>;
export const EditarDocumentoDocument = gql`
    mutation EditarDocumento($id: Int!, $input: DocumentationInputType!) {
  documentations {
    updateDocumentation(id: $id, documentation: $input) {
      id
    }
  }
}
    `;
export type EditarDocumentoMutationFn = Apollo.MutationFunction<EditarDocumentoMutation, EditarDocumentoMutationVariables>;

/**
 * __useEditarDocumentoMutation__
 *
 * To run a mutation, you first call `useEditarDocumentoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarDocumentoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarDocumentoMutation, { data, loading, error }] = useEditarDocumentoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarDocumentoMutation(baseOptions?: Apollo.MutationHookOptions<EditarDocumentoMutation, EditarDocumentoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarDocumentoMutation, EditarDocumentoMutationVariables>(EditarDocumentoDocument, options);
      }
export type EditarDocumentoMutationHookResult = ReturnType<typeof useEditarDocumentoMutation>;
export type EditarDocumentoMutationResult = Apollo.MutationResult<EditarDocumentoMutation>;
export type EditarDocumentoMutationOptions = Apollo.BaseMutationOptions<EditarDocumentoMutation, EditarDocumentoMutationVariables>;
export const EditarDespesaDocument = gql`
    mutation EditarDespesa($id: Int!, $input: ExpenseInputType!) {
  expenses {
    updateExpense(id: $id, expense: $input) {
      id
    }
  }
}
    `;
export type EditarDespesaMutationFn = Apollo.MutationFunction<EditarDespesaMutation, EditarDespesaMutationVariables>;

/**
 * __useEditarDespesaMutation__
 *
 * To run a mutation, you first call `useEditarDespesaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarDespesaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarDespesaMutation, { data, loading, error }] = useEditarDespesaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarDespesaMutation(baseOptions?: Apollo.MutationHookOptions<EditarDespesaMutation, EditarDespesaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarDespesaMutation, EditarDespesaMutationVariables>(EditarDespesaDocument, options);
      }
export type EditarDespesaMutationHookResult = ReturnType<typeof useEditarDespesaMutation>;
export type EditarDespesaMutationResult = Apollo.MutationResult<EditarDespesaMutation>;
export type EditarDespesaMutationOptions = Apollo.BaseMutationOptions<EditarDespesaMutation, EditarDespesaMutationVariables>;
export const EditarGrupoProdutoDocument = gql`
    mutation EditarGrupoProduto($id: Int!, $input: GroupInputType!) {
  group {
    updateGroup(id: $id, group: $input) {
      id
    }
  }
}
    `;
export type EditarGrupoProdutoMutationFn = Apollo.MutationFunction<EditarGrupoProdutoMutation, EditarGrupoProdutoMutationVariables>;

/**
 * __useEditarGrupoProdutoMutation__
 *
 * To run a mutation, you first call `useEditarGrupoProdutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarGrupoProdutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarGrupoProdutoMutation, { data, loading, error }] = useEditarGrupoProdutoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarGrupoProdutoMutation(baseOptions?: Apollo.MutationHookOptions<EditarGrupoProdutoMutation, EditarGrupoProdutoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarGrupoProdutoMutation, EditarGrupoProdutoMutationVariables>(EditarGrupoProdutoDocument, options);
      }
export type EditarGrupoProdutoMutationHookResult = ReturnType<typeof useEditarGrupoProdutoMutation>;
export type EditarGrupoProdutoMutationResult = Apollo.MutationResult<EditarGrupoProdutoMutation>;
export type EditarGrupoProdutoMutationOptions = Apollo.BaseMutationOptions<EditarGrupoProdutoMutation, EditarGrupoProdutoMutationVariables>;
export const EditarTercerizadoDocument = gql`
    mutation EditarTercerizado($id: Int!, $input: OutsourcedInputType!) {
  outsourceds {
    updateOutsourced(id: $id, outsourced: $input) {
      id
    }
  }
}
    `;
export type EditarTercerizadoMutationFn = Apollo.MutationFunction<EditarTercerizadoMutation, EditarTercerizadoMutationVariables>;

/**
 * __useEditarTercerizadoMutation__
 *
 * To run a mutation, you first call `useEditarTercerizadoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarTercerizadoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarTercerizadoMutation, { data, loading, error }] = useEditarTercerizadoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarTercerizadoMutation(baseOptions?: Apollo.MutationHookOptions<EditarTercerizadoMutation, EditarTercerizadoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarTercerizadoMutation, EditarTercerizadoMutationVariables>(EditarTercerizadoDocument, options);
      }
export type EditarTercerizadoMutationHookResult = ReturnType<typeof useEditarTercerizadoMutation>;
export type EditarTercerizadoMutationResult = Apollo.MutationResult<EditarTercerizadoMutation>;
export type EditarTercerizadoMutationOptions = Apollo.BaseMutationOptions<EditarTercerizadoMutation, EditarTercerizadoMutationVariables>;
export const EditarPessoaDocument = gql`
    mutation EditarPessoa($id: Int!, $input: PeopleInputType!) {
  peoples {
    updatePeople(id: $id, people: $input) {
      id
    }
  }
}
    `;
export type EditarPessoaMutationFn = Apollo.MutationFunction<EditarPessoaMutation, EditarPessoaMutationVariables>;

/**
 * __useEditarPessoaMutation__
 *
 * To run a mutation, you first call `useEditarPessoaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarPessoaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarPessoaMutation, { data, loading, error }] = useEditarPessoaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarPessoaMutation(baseOptions?: Apollo.MutationHookOptions<EditarPessoaMutation, EditarPessoaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarPessoaMutation, EditarPessoaMutationVariables>(EditarPessoaDocument, options);
      }
export type EditarPessoaMutationHookResult = ReturnType<typeof useEditarPessoaMutation>;
export type EditarPessoaMutationResult = Apollo.MutationResult<EditarPessoaMutation>;
export type EditarPessoaMutationOptions = Apollo.BaseMutationOptions<EditarPessoaMutation, EditarPessoaMutationVariables>;
export const EditarProdutoDocument = gql`
    mutation EditarProduto($id: Int!, $input: ProductInputType!) {
  products {
    updateProduct(id: $id, product: $input) {
      id
    }
  }
}
    `;
export type EditarProdutoMutationFn = Apollo.MutationFunction<EditarProdutoMutation, EditarProdutoMutationVariables>;

/**
 * __useEditarProdutoMutation__
 *
 * To run a mutation, you first call `useEditarProdutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarProdutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarProdutoMutation, { data, loading, error }] = useEditarProdutoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarProdutoMutation(baseOptions?: Apollo.MutationHookOptions<EditarProdutoMutation, EditarProdutoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarProdutoMutation, EditarProdutoMutationVariables>(EditarProdutoDocument, options);
      }
export type EditarProdutoMutationHookResult = ReturnType<typeof useEditarProdutoMutation>;
export type EditarProdutoMutationResult = Apollo.MutationResult<EditarProdutoMutation>;
export type EditarProdutoMutationOptions = Apollo.BaseMutationOptions<EditarProdutoMutation, EditarProdutoMutationVariables>;
export const EditarFornecedorDocument = gql`
    mutation EditarFornecedor($id: Int!, $input: ProviderInputType!) {
  providers {
    updateProvider(id: $id, provider: $input) {
      id
    }
  }
}
    `;
export type EditarFornecedorMutationFn = Apollo.MutationFunction<EditarFornecedorMutation, EditarFornecedorMutationVariables>;

/**
 * __useEditarFornecedorMutation__
 *
 * To run a mutation, you first call `useEditarFornecedorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarFornecedorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarFornecedorMutation, { data, loading, error }] = useEditarFornecedorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarFornecedorMutation(baseOptions?: Apollo.MutationHookOptions<EditarFornecedorMutation, EditarFornecedorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarFornecedorMutation, EditarFornecedorMutationVariables>(EditarFornecedorDocument, options);
      }
export type EditarFornecedorMutationHookResult = ReturnType<typeof useEditarFornecedorMutation>;
export type EditarFornecedorMutationResult = Apollo.MutationResult<EditarFornecedorMutation>;
export type EditarFornecedorMutationOptions = Apollo.BaseMutationOptions<EditarFornecedorMutation, EditarFornecedorMutationVariables>;
export const EditarCargoDocument = gql`
    mutation EditarCargo($id: Int!, $input: ResponsibilityInputType!) {
  responsibilities {
    updateResponsibility(id: $id, responsibility: $input) {
      id
    }
  }
}
    `;
export type EditarCargoMutationFn = Apollo.MutationFunction<EditarCargoMutation, EditarCargoMutationVariables>;

/**
 * __useEditarCargoMutation__
 *
 * To run a mutation, you first call `useEditarCargoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarCargoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarCargoMutation, { data, loading, error }] = useEditarCargoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarCargoMutation(baseOptions?: Apollo.MutationHookOptions<EditarCargoMutation, EditarCargoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarCargoMutation, EditarCargoMutationVariables>(EditarCargoDocument, options);
      }
export type EditarCargoMutationHookResult = ReturnType<typeof useEditarCargoMutation>;
export type EditarCargoMutationResult = Apollo.MutationResult<EditarCargoMutation>;
export type EditarCargoMutationOptions = Apollo.BaseMutationOptions<EditarCargoMutation, EditarCargoMutationVariables>;
export const EditarUnidadeDocument = gql`
    mutation EditarUnidade($id: Int!, $input: UnityInputType!) {
  unity {
    updateUnity(id: $id, unity: $input) {
      id
    }
  }
}
    `;
export type EditarUnidadeMutationFn = Apollo.MutationFunction<EditarUnidadeMutation, EditarUnidadeMutationVariables>;

/**
 * __useEditarUnidadeMutation__
 *
 * To run a mutation, you first call `useEditarUnidadeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarUnidadeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarUnidadeMutation, { data, loading, error }] = useEditarUnidadeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarUnidadeMutation(baseOptions?: Apollo.MutationHookOptions<EditarUnidadeMutation, EditarUnidadeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarUnidadeMutation, EditarUnidadeMutationVariables>(EditarUnidadeDocument, options);
      }
export type EditarUnidadeMutationHookResult = ReturnType<typeof useEditarUnidadeMutation>;
export type EditarUnidadeMutationResult = Apollo.MutationResult<EditarUnidadeMutation>;
export type EditarUnidadeMutationOptions = Apollo.BaseMutationOptions<EditarUnidadeMutation, EditarUnidadeMutationVariables>;
export const EditarMarcaDocument = gql`
    mutation EditarMarca($id: Int!, $input: BrandInputType!) {
  brands {
    updateBrand(id: $id, brand: $input) {
      id
    }
  }
}
    `;
export type EditarMarcaMutationFn = Apollo.MutationFunction<EditarMarcaMutation, EditarMarcaMutationVariables>;

/**
 * __useEditarMarcaMutation__
 *
 * To run a mutation, you first call `useEditarMarcaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditarMarcaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editarMarcaMutation, { data, loading, error }] = useEditarMarcaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditarMarcaMutation(baseOptions?: Apollo.MutationHookOptions<EditarMarcaMutation, EditarMarcaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditarMarcaMutation, EditarMarcaMutationVariables>(EditarMarcaDocument, options);
      }
export type EditarMarcaMutationHookResult = ReturnType<typeof useEditarMarcaMutation>;
export type EditarMarcaMutationResult = Apollo.MutationResult<EditarMarcaMutation>;
export type EditarMarcaMutationOptions = Apollo.BaseMutationOptions<EditarMarcaMutation, EditarMarcaMutationVariables>;
export const GetMarcaByIdDocument = gql`
    query getMarcaByID($id: Int!) {
  brands {
    findById(id: $id) {
      id
      description
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetMarcaByIdQuery__
 *
 * To run a query within a React component, call `useGetMarcaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarcaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarcaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMarcaByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMarcaByIdQuery, GetMarcaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMarcaByIdQuery, GetMarcaByIdQueryVariables>(GetMarcaByIdDocument, options);
      }
export function useGetMarcaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMarcaByIdQuery, GetMarcaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMarcaByIdQuery, GetMarcaByIdQueryVariables>(GetMarcaByIdDocument, options);
        }
export type GetMarcaByIdQueryHookResult = ReturnType<typeof useGetMarcaByIdQuery>;
export type GetMarcaByIdLazyQueryHookResult = ReturnType<typeof useGetMarcaByIdLazyQuery>;
export type GetMarcaByIdQueryResult = Apollo.QueryResult<GetMarcaByIdQuery, GetMarcaByIdQueryVariables>;
export const GetMarcasDocument = gql`
    query getMarcas($pagination: PaginationDetailsType, $filter: BrandFilterByInputType, $sort: BrandByInputType) {
  brands {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        creationDate
        changeDate
        active
        company {
          id
          corporateName
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetMarcasQuery__
 *
 * To run a query within a React component, call `useGetMarcasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarcasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarcasQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetMarcasQuery(baseOptions?: Apollo.QueryHookOptions<GetMarcasQuery, GetMarcasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMarcasQuery, GetMarcasQueryVariables>(GetMarcasDocument, options);
      }
export function useGetMarcasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMarcasQuery, GetMarcasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMarcasQuery, GetMarcasQueryVariables>(GetMarcasDocument, options);
        }
export type GetMarcasQueryHookResult = ReturnType<typeof useGetMarcasQuery>;
export type GetMarcasLazyQueryHookResult = ReturnType<typeof useGetMarcasLazyQuery>;
export type GetMarcasQueryResult = Apollo.QueryResult<GetMarcasQuery, GetMarcasQueryVariables>;
export const GetObraByIdDocument = gql`
    query getObraByID($id: Int!) {
  constructions {
    findById(id: $id) {
      id
      address
      art
      batchArea
      buildingArea
      city
      cno
      complement
      dateBegin
      dateEnd
      identifier
      latitude
      license
      longitude
      motherEnrollment
      municipalRegistration
      neighbourhood
      number
      saleValue
      state
      undergroundUse
      zipCode
      active
      statusConstruction
    }
  }
}
    `;

/**
 * __useGetObraByIdQuery__
 *
 * To run a query within a React component, call `useGetObraByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObraByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObraByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetObraByIdQuery(baseOptions: Apollo.QueryHookOptions<GetObraByIdQuery, GetObraByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObraByIdQuery, GetObraByIdQueryVariables>(GetObraByIdDocument, options);
      }
export function useGetObraByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObraByIdQuery, GetObraByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObraByIdQuery, GetObraByIdQueryVariables>(GetObraByIdDocument, options);
        }
export type GetObraByIdQueryHookResult = ReturnType<typeof useGetObraByIdQuery>;
export type GetObraByIdLazyQueryHookResult = ReturnType<typeof useGetObraByIdLazyQuery>;
export type GetObraByIdQueryResult = Apollo.QueryResult<GetObraByIdQuery, GetObraByIdQueryVariables>;
export const GetUnidadeResidencialByIdDocument = gql`
    query getUnidadeResidencialById($id: Int!) {
  constructionHouses {
    findById(id: $id) {
      id
      description
      constructionId
      permeableArea
      fractionBatch
      buildingArea
      energyConsumptionUnit
      saleValue
      waterConsumptionUnit
      active
      construction {
        id
      }
    }
  }
}
    `;

/**
 * __useGetUnidadeResidencialByIdQuery__
 *
 * To run a query within a React component, call `useGetUnidadeResidencialByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnidadeResidencialByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnidadeResidencialByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnidadeResidencialByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUnidadeResidencialByIdQuery, GetUnidadeResidencialByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnidadeResidencialByIdQuery, GetUnidadeResidencialByIdQueryVariables>(GetUnidadeResidencialByIdDocument, options);
      }
export function useGetUnidadeResidencialByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnidadeResidencialByIdQuery, GetUnidadeResidencialByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnidadeResidencialByIdQuery, GetUnidadeResidencialByIdQueryVariables>(GetUnidadeResidencialByIdDocument, options);
        }
export type GetUnidadeResidencialByIdQueryHookResult = ReturnType<typeof useGetUnidadeResidencialByIdQuery>;
export type GetUnidadeResidencialByIdLazyQueryHookResult = ReturnType<typeof useGetUnidadeResidencialByIdLazyQuery>;
export type GetUnidadeResidencialByIdQueryResult = Apollo.QueryResult<GetUnidadeResidencialByIdQuery, GetUnidadeResidencialByIdQueryVariables>;
export const GetUnidadeResidencialsDocument = gql`
    query getUnidadeResidencials($pagination: PaginationDetailsType, $filter: ConstructionHouseFilterByInputType, $sort: ConstructionHouseByInputType) {
  constructionHouses {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        constructionId
        permeableArea
        fractionBatch
        buildingArea
        energyConsumptionUnit
        saleValue
        waterConsumptionUnit
        active
        construction {
          id
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetUnidadeResidencialsQuery__
 *
 * To run a query within a React component, call `useGetUnidadeResidencialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnidadeResidencialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnidadeResidencialsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetUnidadeResidencialsQuery(baseOptions?: Apollo.QueryHookOptions<GetUnidadeResidencialsQuery, GetUnidadeResidencialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnidadeResidencialsQuery, GetUnidadeResidencialsQueryVariables>(GetUnidadeResidencialsDocument, options);
      }
export function useGetUnidadeResidencialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnidadeResidencialsQuery, GetUnidadeResidencialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnidadeResidencialsQuery, GetUnidadeResidencialsQueryVariables>(GetUnidadeResidencialsDocument, options);
        }
export type GetUnidadeResidencialsQueryHookResult = ReturnType<typeof useGetUnidadeResidencialsQuery>;
export type GetUnidadeResidencialsLazyQueryHookResult = ReturnType<typeof useGetUnidadeResidencialsLazyQuery>;
export type GetUnidadeResidencialsQueryResult = Apollo.QueryResult<GetUnidadeResidencialsQuery, GetUnidadeResidencialsQueryVariables>;
export const GetVinculoClientesObraByIdDocument = gql`
    query getVinculoClientesObraByID($id: Int!) {
  constructionInvestors {
    findById(id: $id) {
      id
      peopleId
      constructionId
      active
      people {
        id
        fantasyName
        cnpj
        cpf
        typePeople
      }
    }
  }
}
    `;

/**
 * __useGetVinculoClientesObraByIdQuery__
 *
 * To run a query within a React component, call `useGetVinculoClientesObraByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVinculoClientesObraByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVinculoClientesObraByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVinculoClientesObraByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVinculoClientesObraByIdQuery, GetVinculoClientesObraByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVinculoClientesObraByIdQuery, GetVinculoClientesObraByIdQueryVariables>(GetVinculoClientesObraByIdDocument, options);
      }
export function useGetVinculoClientesObraByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVinculoClientesObraByIdQuery, GetVinculoClientesObraByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVinculoClientesObraByIdQuery, GetVinculoClientesObraByIdQueryVariables>(GetVinculoClientesObraByIdDocument, options);
        }
export type GetVinculoClientesObraByIdQueryHookResult = ReturnType<typeof useGetVinculoClientesObraByIdQuery>;
export type GetVinculoClientesObraByIdLazyQueryHookResult = ReturnType<typeof useGetVinculoClientesObraByIdLazyQuery>;
export type GetVinculoClientesObraByIdQueryResult = Apollo.QueryResult<GetVinculoClientesObraByIdQuery, GetVinculoClientesObraByIdQueryVariables>;
export const GetVinculoClientesObraDocument = gql`
    query getVinculoClientesObra($pagination: PaginationDetailsType, $filter: ConstructionInvestorFilterByInputType, $sort: ConstructionInvestorByInputType) {
  constructionInvestors {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        peopleId
        constructionId
        active
        people {
          id
          fantasyName
          cnpj
          cpf
          typePeople
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetVinculoClientesObraQuery__
 *
 * To run a query within a React component, call `useGetVinculoClientesObraQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVinculoClientesObraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVinculoClientesObraQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetVinculoClientesObraQuery(baseOptions?: Apollo.QueryHookOptions<GetVinculoClientesObraQuery, GetVinculoClientesObraQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVinculoClientesObraQuery, GetVinculoClientesObraQueryVariables>(GetVinculoClientesObraDocument, options);
      }
export function useGetVinculoClientesObraLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVinculoClientesObraQuery, GetVinculoClientesObraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVinculoClientesObraQuery, GetVinculoClientesObraQueryVariables>(GetVinculoClientesObraDocument, options);
        }
export type GetVinculoClientesObraQueryHookResult = ReturnType<typeof useGetVinculoClientesObraQuery>;
export type GetVinculoClientesObraLazyQueryHookResult = ReturnType<typeof useGetVinculoClientesObraLazyQuery>;
export type GetVinculoClientesObraQueryResult = Apollo.QueryResult<GetVinculoClientesObraQuery, GetVinculoClientesObraQueryVariables>;
export const GetObrasDocument = gql`
    query getObras($pagination: PaginationDetailsType, $filter: ConstructionFilterByInputType, $sort: ConstructionByInputType) {
  constructions {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        address
        art
        batchArea
        buildingArea
        city
        cno
        complement
        dateBegin
        dateEnd
        identifier
        latitude
        license
        longitude
        motherEnrollment
        municipalRegistration
        neighbourhood
        number
        saleValue
        state
        undergroundUse
        zipCode
        active
        statusConstruction
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetObrasQuery__
 *
 * To run a query within a React component, call `useGetObrasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObrasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObrasQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetObrasQuery(baseOptions?: Apollo.QueryHookOptions<GetObrasQuery, GetObrasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObrasQuery, GetObrasQueryVariables>(GetObrasDocument, options);
      }
export function useGetObrasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObrasQuery, GetObrasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObrasQuery, GetObrasQueryVariables>(GetObrasDocument, options);
        }
export type GetObrasQueryHookResult = ReturnType<typeof useGetObrasQuery>;
export type GetObrasLazyQueryHookResult = ReturnType<typeof useGetObrasLazyQuery>;
export type GetObrasQueryResult = Apollo.QueryResult<GetObrasQuery, GetObrasQueryVariables>;
export const GetDocumentacaoByIdDocument = gql`
    query getDocumentacaoByID($id: Int!) {
  documentations {
    findById(id: $id) {
      id
      description
      creationDate
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetDocumentacaoByIdQuery__
 *
 * To run a query within a React component, call `useGetDocumentacaoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentacaoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentacaoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDocumentacaoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDocumentacaoByIdQuery, GetDocumentacaoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDocumentacaoByIdQuery, GetDocumentacaoByIdQueryVariables>(GetDocumentacaoByIdDocument, options);
      }
export function useGetDocumentacaoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDocumentacaoByIdQuery, GetDocumentacaoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDocumentacaoByIdQuery, GetDocumentacaoByIdQueryVariables>(GetDocumentacaoByIdDocument, options);
        }
export type GetDocumentacaoByIdQueryHookResult = ReturnType<typeof useGetDocumentacaoByIdQuery>;
export type GetDocumentacaoByIdLazyQueryHookResult = ReturnType<typeof useGetDocumentacaoByIdLazyQuery>;
export type GetDocumentacaoByIdQueryResult = Apollo.QueryResult<GetDocumentacaoByIdQuery, GetDocumentacaoByIdQueryVariables>;
export const GetDocumentosDocument = gql`
    query getDocumentos($pagination: PaginationDetailsType, $filter: DocumentationFilterByInputType, $sort: DocumentationByInputType) {
  documentations {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        creationDate
        changeDate
        active
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetDocumentosQuery__
 *
 * To run a query within a React component, call `useGetDocumentosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentosQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetDocumentosQuery(baseOptions?: Apollo.QueryHookOptions<GetDocumentosQuery, GetDocumentosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDocumentosQuery, GetDocumentosQueryVariables>(GetDocumentosDocument, options);
      }
export function useGetDocumentosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDocumentosQuery, GetDocumentosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDocumentosQuery, GetDocumentosQueryVariables>(GetDocumentosDocument, options);
        }
export type GetDocumentosQueryHookResult = ReturnType<typeof useGetDocumentosQuery>;
export type GetDocumentosLazyQueryHookResult = ReturnType<typeof useGetDocumentosLazyQuery>;
export type GetDocumentosQueryResult = Apollo.QueryResult<GetDocumentosQuery, GetDocumentosQueryVariables>;
export const GetDespesaByIdDocument = gql`
    query getDespesaByID($id: Int!) {
  expenses {
    findById(id: $id) {
      id
      description
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetDespesaByIdQuery__
 *
 * To run a query within a React component, call `useGetDespesaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDespesaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDespesaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDespesaByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDespesaByIdQuery, GetDespesaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDespesaByIdQuery, GetDespesaByIdQueryVariables>(GetDespesaByIdDocument, options);
      }
export function useGetDespesaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDespesaByIdQuery, GetDespesaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDespesaByIdQuery, GetDespesaByIdQueryVariables>(GetDespesaByIdDocument, options);
        }
export type GetDespesaByIdQueryHookResult = ReturnType<typeof useGetDespesaByIdQuery>;
export type GetDespesaByIdLazyQueryHookResult = ReturnType<typeof useGetDespesaByIdLazyQuery>;
export type GetDespesaByIdQueryResult = Apollo.QueryResult<GetDespesaByIdQuery, GetDespesaByIdQueryVariables>;
export const GetDespesasDocument = gql`
    query getDespesas($pagination: PaginationDetailsType, $filter: ExpenseFilterByInputType, $sort: ExpenseByInputType) {
  expenses {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        creationDate
        changeDate
        active
        company {
          id
          corporateName
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetDespesasQuery__
 *
 * To run a query within a React component, call `useGetDespesasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDespesasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDespesasQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetDespesasQuery(baseOptions?: Apollo.QueryHookOptions<GetDespesasQuery, GetDespesasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDespesasQuery, GetDespesasQueryVariables>(GetDespesasDocument, options);
      }
export function useGetDespesasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDespesasQuery, GetDespesasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDespesasQuery, GetDespesasQueryVariables>(GetDespesasDocument, options);
        }
export type GetDespesasQueryHookResult = ReturnType<typeof useGetDespesasQuery>;
export type GetDespesasLazyQueryHookResult = ReturnType<typeof useGetDespesasLazyQuery>;
export type GetDespesasQueryResult = Apollo.QueryResult<GetDespesasQuery, GetDespesasQueryVariables>;
export const GetGrupoByIdDocument = gql`
    query getGrupoByID($id: Int!) {
  group {
    findById(id: $id) {
      id
      description
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetGrupoByIdQuery__
 *
 * To run a query within a React component, call `useGetGrupoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGrupoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGrupoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGrupoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetGrupoByIdQuery, GetGrupoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGrupoByIdQuery, GetGrupoByIdQueryVariables>(GetGrupoByIdDocument, options);
      }
export function useGetGrupoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGrupoByIdQuery, GetGrupoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGrupoByIdQuery, GetGrupoByIdQueryVariables>(GetGrupoByIdDocument, options);
        }
export type GetGrupoByIdQueryHookResult = ReturnType<typeof useGetGrupoByIdQuery>;
export type GetGrupoByIdLazyQueryHookResult = ReturnType<typeof useGetGrupoByIdLazyQuery>;
export type GetGrupoByIdQueryResult = Apollo.QueryResult<GetGrupoByIdQuery, GetGrupoByIdQueryVariables>;
export const GetGruposProdutoDocument = gql`
    query getGruposProduto($pagination: PaginationDetailsType, $filter: GroupFilterByInputType, $sort: GroupByInputType) {
  group {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        creationDate
        changeDate
        active
        company {
          id
          corporateName
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetGruposProdutoQuery__
 *
 * To run a query within a React component, call `useGetGruposProdutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGruposProdutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGruposProdutoQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetGruposProdutoQuery(baseOptions?: Apollo.QueryHookOptions<GetGruposProdutoQuery, GetGruposProdutoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGruposProdutoQuery, GetGruposProdutoQueryVariables>(GetGruposProdutoDocument, options);
      }
export function useGetGruposProdutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGruposProdutoQuery, GetGruposProdutoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGruposProdutoQuery, GetGruposProdutoQueryVariables>(GetGruposProdutoDocument, options);
        }
export type GetGruposProdutoQueryHookResult = ReturnType<typeof useGetGruposProdutoQuery>;
export type GetGruposProdutoLazyQueryHookResult = ReturnType<typeof useGetGruposProdutoLazyQuery>;
export type GetGruposProdutoQueryResult = Apollo.QueryResult<GetGruposProdutoQuery, GetGruposProdutoQueryVariables>;
export const GetTerceirizadoByIdDocument = gql`
    query getTerceirizadoByID($id: Int!) {
  outsourceds {
    findById(id: $id) {
      id
      neighbourhood
      number
      state
      telephone
      zipCode
      active
      address
      cellPhone
      city
      cnpj
      cpf
      complement
      corporateName
      eMail
      fantasyName
      typePeople
    }
  }
}
    `;

/**
 * __useGetTerceirizadoByIdQuery__
 *
 * To run a query within a React component, call `useGetTerceirizadoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTerceirizadoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTerceirizadoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTerceirizadoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTerceirizadoByIdQuery, GetTerceirizadoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTerceirizadoByIdQuery, GetTerceirizadoByIdQueryVariables>(GetTerceirizadoByIdDocument, options);
      }
export function useGetTerceirizadoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTerceirizadoByIdQuery, GetTerceirizadoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTerceirizadoByIdQuery, GetTerceirizadoByIdQueryVariables>(GetTerceirizadoByIdDocument, options);
        }
export type GetTerceirizadoByIdQueryHookResult = ReturnType<typeof useGetTerceirizadoByIdQuery>;
export type GetTerceirizadoByIdLazyQueryHookResult = ReturnType<typeof useGetTerceirizadoByIdLazyQuery>;
export type GetTerceirizadoByIdQueryResult = Apollo.QueryResult<GetTerceirizadoByIdQuery, GetTerceirizadoByIdQueryVariables>;
export const GetTerceirizadosDocument = gql`
    query getTerceirizados($pagination: PaginationDetailsType, $filter: OutsourcedFilterByInputType, $sort: OutsourcedByInputType) {
  outsourceds {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        neighbourhood
        number
        state
        telephone
        zipCode
        active
        address
        cellPhone
        city
        cnpj
        cpf
        complement
        corporateName
        eMail
        fantasyName
        typePeople
        company {
          id
          corporateName
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetTerceirizadosQuery__
 *
 * To run a query within a React component, call `useGetTerceirizadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTerceirizadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTerceirizadosQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetTerceirizadosQuery(baseOptions?: Apollo.QueryHookOptions<GetTerceirizadosQuery, GetTerceirizadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTerceirizadosQuery, GetTerceirizadosQueryVariables>(GetTerceirizadosDocument, options);
      }
export function useGetTerceirizadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTerceirizadosQuery, GetTerceirizadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTerceirizadosQuery, GetTerceirizadosQueryVariables>(GetTerceirizadosDocument, options);
        }
export type GetTerceirizadosQueryHookResult = ReturnType<typeof useGetTerceirizadosQuery>;
export type GetTerceirizadosLazyQueryHookResult = ReturnType<typeof useGetTerceirizadosLazyQuery>;
export type GetTerceirizadosQueryResult = Apollo.QueryResult<GetTerceirizadosQuery, GetTerceirizadosQueryVariables>;
export const GetPessoaIdDocument = gql`
    query getPessoaID($id: Int!) {
  peoples {
    findById(id: $id) {
      id
      neighbourhood
      number
      state
      telephone
      zipCode
      active
      address
      cellPhone
      city
      cnpj
      cpf
      complement
      corporateName
      eMail
      fantasyName
      typePeople
      constructor
      client
      investor
    }
  }
}
    `;

/**
 * __useGetPessoaIdQuery__
 *
 * To run a query within a React component, call `useGetPessoaIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPessoaIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPessoaIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPessoaIdQuery(baseOptions: Apollo.QueryHookOptions<GetPessoaIdQuery, GetPessoaIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPessoaIdQuery, GetPessoaIdQueryVariables>(GetPessoaIdDocument, options);
      }
export function useGetPessoaIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPessoaIdQuery, GetPessoaIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPessoaIdQuery, GetPessoaIdQueryVariables>(GetPessoaIdDocument, options);
        }
export type GetPessoaIdQueryHookResult = ReturnType<typeof useGetPessoaIdQuery>;
export type GetPessoaIdLazyQueryHookResult = ReturnType<typeof useGetPessoaIdLazyQuery>;
export type GetPessoaIdQueryResult = Apollo.QueryResult<GetPessoaIdQuery, GetPessoaIdQueryVariables>;
export const GetPessoasDocument = gql`
    query getPessoas($pagination: PaginationDetailsType, $filter: PeopleFilterByInputType, $sort: PeopleByInputType) {
  peoples {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        neighbourhood
        number
        state
        telephone
        zipCode
        active
        address
        cellPhone
        city
        cnpj
        complement
        fantasyName
        corporateName
        eMail
        constructor
        client
        investor
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetPessoasQuery__
 *
 * To run a query within a React component, call `useGetPessoasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPessoasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPessoasQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetPessoasQuery(baseOptions?: Apollo.QueryHookOptions<GetPessoasQuery, GetPessoasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPessoasQuery, GetPessoasQueryVariables>(GetPessoasDocument, options);
      }
export function useGetPessoasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPessoasQuery, GetPessoasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPessoasQuery, GetPessoasQueryVariables>(GetPessoasDocument, options);
        }
export type GetPessoasQueryHookResult = ReturnType<typeof useGetPessoasQuery>;
export type GetPessoasLazyQueryHookResult = ReturnType<typeof useGetPessoasLazyQuery>;
export type GetPessoasQueryResult = Apollo.QueryResult<GetPessoasQuery, GetPessoasQueryVariables>;
export const GetProdutoByIdDocument = gql`
    query getProdutoByID($id: Int!) {
  products {
    findById(id: $id) {
      id
      detail
      description
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetProdutoByIdQuery__
 *
 * To run a query within a React component, call `useGetProdutoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProdutoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProdutoByIdQuery, GetProdutoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProdutoByIdQuery, GetProdutoByIdQueryVariables>(GetProdutoByIdDocument, options);
      }
export function useGetProdutoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProdutoByIdQuery, GetProdutoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProdutoByIdQuery, GetProdutoByIdQueryVariables>(GetProdutoByIdDocument, options);
        }
export type GetProdutoByIdQueryHookResult = ReturnType<typeof useGetProdutoByIdQuery>;
export type GetProdutoByIdLazyQueryHookResult = ReturnType<typeof useGetProdutoByIdLazyQuery>;
export type GetProdutoByIdQueryResult = Apollo.QueryResult<GetProdutoByIdQuery, GetProdutoByIdQueryVariables>;
export const GetProdutosDocument = gql`
    query getProdutos($pagination: PaginationDetailsType, $filter: ProductFilterByInputType, $sort: ProductByInputType) {
  products {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        detail
        description
        changeDate
        active
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetProdutosQuery__
 *
 * To run a query within a React component, call `useGetProdutosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutosQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetProdutosQuery(baseOptions?: Apollo.QueryHookOptions<GetProdutosQuery, GetProdutosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProdutosQuery, GetProdutosQueryVariables>(GetProdutosDocument, options);
      }
export function useGetProdutosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProdutosQuery, GetProdutosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProdutosQuery, GetProdutosQueryVariables>(GetProdutosDocument, options);
        }
export type GetProdutosQueryHookResult = ReturnType<typeof useGetProdutosQuery>;
export type GetProdutosLazyQueryHookResult = ReturnType<typeof useGetProdutosLazyQuery>;
export type GetProdutosQueryResult = Apollo.QueryResult<GetProdutosQuery, GetProdutosQueryVariables>;
export const GetFornecedorByIdDocument = gql`
    query getFornecedorByID($id: Int!) {
  providers {
    findById(id: $id) {
      id
      neighbourhood
      number
      state
      telephone
      zipCode
      active
      address
      cellPhone
      city
      cnpj
      cpf
      typePeople
      complement
      name
      eMail
    }
  }
}
    `;

/**
 * __useGetFornecedorByIdQuery__
 *
 * To run a query within a React component, call `useGetFornecedorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFornecedorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFornecedorByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFornecedorByIdQuery(baseOptions: Apollo.QueryHookOptions<GetFornecedorByIdQuery, GetFornecedorByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFornecedorByIdQuery, GetFornecedorByIdQueryVariables>(GetFornecedorByIdDocument, options);
      }
export function useGetFornecedorByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFornecedorByIdQuery, GetFornecedorByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFornecedorByIdQuery, GetFornecedorByIdQueryVariables>(GetFornecedorByIdDocument, options);
        }
export type GetFornecedorByIdQueryHookResult = ReturnType<typeof useGetFornecedorByIdQuery>;
export type GetFornecedorByIdLazyQueryHookResult = ReturnType<typeof useGetFornecedorByIdLazyQuery>;
export type GetFornecedorByIdQueryResult = Apollo.QueryResult<GetFornecedorByIdQuery, GetFornecedorByIdQueryVariables>;
export const GetFornecedoresDocument = gql`
    query getFornecedores($pagination: PaginationDetailsType, $filter: ProviderFilterByInputType, $sort: ProviderByInputType) {
  providers {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        neighbourhood
        number
        state
        telephone
        zipCode
        active
        address
        cellPhone
        city
        cnpj
        complement
        name
        eMail
        company {
          id
          corporateName
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetFornecedoresQuery__
 *
 * To run a query within a React component, call `useGetFornecedoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFornecedoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFornecedoresQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetFornecedoresQuery(baseOptions?: Apollo.QueryHookOptions<GetFornecedoresQuery, GetFornecedoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFornecedoresQuery, GetFornecedoresQueryVariables>(GetFornecedoresDocument, options);
      }
export function useGetFornecedoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFornecedoresQuery, GetFornecedoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFornecedoresQuery, GetFornecedoresQueryVariables>(GetFornecedoresDocument, options);
        }
export type GetFornecedoresQueryHookResult = ReturnType<typeof useGetFornecedoresQuery>;
export type GetFornecedoresLazyQueryHookResult = ReturnType<typeof useGetFornecedoresLazyQuery>;
export type GetFornecedoresQueryResult = Apollo.QueryResult<GetFornecedoresQuery, GetFornecedoresQueryVariables>;
export const GetCargoByIdDocument = gql`
    query getCargoByID($id: Int!) {
  responsibilities {
    findById(id: $id) {
      id
      description
      changeDate
      active
    }
  }
}
    `;

/**
 * __useGetCargoByIdQuery__
 *
 * To run a query within a React component, call `useGetCargoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCargoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCargoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCargoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCargoByIdQuery, GetCargoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCargoByIdQuery, GetCargoByIdQueryVariables>(GetCargoByIdDocument, options);
      }
export function useGetCargoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCargoByIdQuery, GetCargoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCargoByIdQuery, GetCargoByIdQueryVariables>(GetCargoByIdDocument, options);
        }
export type GetCargoByIdQueryHookResult = ReturnType<typeof useGetCargoByIdQuery>;
export type GetCargoByIdLazyQueryHookResult = ReturnType<typeof useGetCargoByIdLazyQuery>;
export type GetCargoByIdQueryResult = Apollo.QueryResult<GetCargoByIdQuery, GetCargoByIdQueryVariables>;
export const GetCargosDocument = gql`
    query getCargos($pagination: PaginationDetailsType, $filter: ResponsibilityFilterByInputType, $sort: ResponsibilityByInputType) {
  responsibilities {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        changeDate
        active
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetCargosQuery__
 *
 * To run a query within a React component, call `useGetCargosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCargosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCargosQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCargosQuery(baseOptions?: Apollo.QueryHookOptions<GetCargosQuery, GetCargosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCargosQuery, GetCargosQueryVariables>(GetCargosDocument, options);
      }
export function useGetCargosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCargosQuery, GetCargosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCargosQuery, GetCargosQueryVariables>(GetCargosDocument, options);
        }
export type GetCargosQueryHookResult = ReturnType<typeof useGetCargosQuery>;
export type GetCargosLazyQueryHookResult = ReturnType<typeof useGetCargosLazyQuery>;
export type GetCargosQueryResult = Apollo.QueryResult<GetCargosQuery, GetCargosQueryVariables>;
export const GetUnidadeByIdDocument = gql`
    query getUnidadeByID($id: Int!) {
  unity {
    findById(id: $id) {
      id
      description
      multiplier
      active
    }
  }
}
    `;

/**
 * __useGetUnidadeByIdQuery__
 *
 * To run a query within a React component, call `useGetUnidadeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnidadeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnidadeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUnidadeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUnidadeByIdQuery, GetUnidadeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnidadeByIdQuery, GetUnidadeByIdQueryVariables>(GetUnidadeByIdDocument, options);
      }
export function useGetUnidadeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnidadeByIdQuery, GetUnidadeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnidadeByIdQuery, GetUnidadeByIdQueryVariables>(GetUnidadeByIdDocument, options);
        }
export type GetUnidadeByIdQueryHookResult = ReturnType<typeof useGetUnidadeByIdQuery>;
export type GetUnidadeByIdLazyQueryHookResult = ReturnType<typeof useGetUnidadeByIdLazyQuery>;
export type GetUnidadeByIdQueryResult = Apollo.QueryResult<GetUnidadeByIdQuery, GetUnidadeByIdQueryVariables>;
export const GetUnidadesDocument = gql`
    query getUnidades($pagination: PaginationDetailsType, $filter: UnityFilterByInputType, $sort: UnityByInputType) {
  unity {
    findall(pagination: $pagination, filter: $filter, sort: $sort) {
      items {
        id
        description
        multiplier
        active
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetUnidadesQuery__
 *
 * To run a query within a React component, call `useGetUnidadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnidadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnidadesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetUnidadesQuery(baseOptions?: Apollo.QueryHookOptions<GetUnidadesQuery, GetUnidadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnidadesQuery, GetUnidadesQueryVariables>(GetUnidadesDocument, options);
      }
export function useGetUnidadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnidadesQuery, GetUnidadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnidadesQuery, GetUnidadesQueryVariables>(GetUnidadesDocument, options);
        }
export type GetUnidadesQueryHookResult = ReturnType<typeof useGetUnidadesQuery>;
export type GetUnidadesLazyQueryHookResult = ReturnType<typeof useGetUnidadesLazyQuery>;
export type GetUnidadesQueryResult = Apollo.QueryResult<GetUnidadesQuery, GetUnidadesQueryVariables>;
export const GetUserMeDocument = gql`
    query getUserMe {
  user {
    findMe {
      id
      userName
      phoneNumber
      email
      company {
        id
        corporateName
        fantasyName
        cnpj
      }
    }
  }
}
    `;

/**
 * __useGetUserMeQuery__
 *
 * To run a query within a React component, call `useGetUserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserMeQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMeQuery, GetUserMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMeQuery, GetUserMeQueryVariables>(GetUserMeDocument, options);
      }
export function useGetUserMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMeQuery, GetUserMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMeQuery, GetUserMeQueryVariables>(GetUserMeDocument, options);
        }
export type GetUserMeQueryHookResult = ReturnType<typeof useGetUserMeQuery>;
export type GetUserMeLazyQueryHookResult = ReturnType<typeof useGetUserMeLazyQuery>;
export type GetUserMeQueryResult = Apollo.QueryResult<GetUserMeQuery, GetUserMeQueryVariables>;
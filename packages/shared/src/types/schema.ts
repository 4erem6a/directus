import { Type } from './fields';
import { Relation } from './relations';
import { Filter } from './filter';

export type FieldOverview = {
	field: string;
	defaultValue: any;
	nullable: boolean;
	generated: boolean;
	type: Type | 'unknown' | 'alias';
	dbType: string | null;
	precision: number | null;
	scale: number | null;
	special: string[];
	note: string | null;
	validation: Filter | null;
	alias: boolean;
};

export type CollectionOverview = {
	collection: string;
	primary: string;
	singleton: boolean;
	sortField: string | null;
	note: string | null;
	accountability: 'all' | 'activity' | null;
}

export type SchemaOverview = {
	getCollections: () => Promise<Record<string, CollectionOverview>>
	getCollection: (collection: string) => Promise<CollectionOverview | null>
	getFields: (collection: string) => Promise<Record<string, FieldOverview>>
	getField: (collection: string, field: string) => Promise<FieldOverview | null>
	getRelationsForCollection: (collection: string) => Promise<Record<string, Relation>>
	getRelationsForField: (collection: string, field: string) => Promise<Relation | null>
	getPrimaryKeyField: (collection: string) => Promise<FieldOverview | null>
};


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract test(): string | Promise<string>;

    abstract todos(): Todo[] | Promise<Todo[]>;

    abstract getTodo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export class Todo {
    id: number;
    title: string;
    done: boolean;
}

type Nullable<T> = T | null;

import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Flights {

  @PrimaryKey()
  id!: number;

  @Property({unique: true})
  flightNumber!: string;

  @Property()
  from!: string;

  @Property()
  to!: string;

  @Property({default: 'now'})
  landDateTime!: Date;

  @Property()
  takeOffDateTime!: string;
}
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Airports {

  @PrimaryKey()
  id!: number;

  @Property()
  airlinerName!: string;

  @Property()
  airportLocation!: string;

  @Property({unique: true})
  airportCode!: string;

  @Property()
  airportName!: string;
}
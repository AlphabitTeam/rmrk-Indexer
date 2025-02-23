// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type EventEntityProps = Omit<EventEntity, NonNullable<FunctionPropertyNames<EventEntity>>>;

export class EventEntity implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockNumber?: string;

    public timestamp?: Date;

    public caller: string;

    public interaction?: string;

    public meta: string;

    public interactionCollection?: string;

    public interactionNFT?: string;

    public interactionAccount?: string;

    public nftPrice?: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save EventEntity entity without an ID");
        await store.set('EventEntity', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove EventEntity entity without an ID");
        await store.remove('EventEntity', id.toString());
    }

    static async get(id:string): Promise<EventEntity | undefined>{
        assert((id !== null && id !== undefined), "Cannot get EventEntity entity without an ID");
        const record = await store.get('EventEntity', id.toString());
        if (record){
            return EventEntity.create(record as EventEntityProps);
        }else{
            return;
        }
    }



    static create(record: EventEntityProps): EventEntity {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new EventEntity(record.id);
        Object.assign(entity,record);
        return entity;
    }
}

export interface APIModel {
  serialize(): any;
}

export class Stamps implements APIModel {
  stampCreated?: number;
  stampCreatedBy?: {
    uuid: string;
    name: string;
  };
  stampUpdated?: number;
  stampUpdatedBy?: {
    uuid: string;
    name: string;
  };

  deserialize(input: any): this {
    this.stampCreated = input.stamp_created;
    this.stampCreatedBy = input.stamp_created_by;
    this.stampUpdated = input.stamp_updated;
    this.stampUpdatedBy = input.stamp_updated_by;
    return this;
  }

  serialize(): any {
  }
}

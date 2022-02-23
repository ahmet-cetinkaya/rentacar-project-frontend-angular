import { Entity } from 'app/core/models/entity';

export interface UserOperationClaim extends Entity {
  userId: number;
  operationClaimId: number;
}

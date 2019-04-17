import { SetMetadata } from '@nestjs/common';

export const AccessPriv = (privs: string) => SetMetadata('accessPriv', privs);

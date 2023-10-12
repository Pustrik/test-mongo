import { Request } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions';
import { messageUtil } from './messages.util';

export const validateDto = async (req: Request, dto) => {
  const userDto = plainToInstance(dto, req.body);

  const errors = await validate(userDto);
  if (errors.length > 0)
    throw new ValidationException(
      messageUtil.exceptions.entity,
      errors.map(({ property, constraints }) => ({
        property,
        constraints,
      })),
    );
};

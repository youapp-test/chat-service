import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './user.entity';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ required: true, unique: true })
  user: User;

  @Prop({ default: null })
  name: string;

  @Prop({ default: null })
  image: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

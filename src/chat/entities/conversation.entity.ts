import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Chat } from './chat.entity';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema()
export class Conversation {
  @Prop({ required: true })
  participants: Types.ObjectId[];

  @Prop({ required: true })
  chat: Chat[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);

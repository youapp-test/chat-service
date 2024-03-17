import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './entities/auth.entity';
import { Profile } from './entities/profile.entity';
import { Chat } from './entities/chat.entity';
import { Conversation } from './entities/conversation.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<Chat>,
    @InjectModel(Conversation.name)
    private conversationModel: Model<Conversation>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
    @InjectModel(Auth.name) private authModel: Model<Auth>,
  ) {}

  create(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  async createAuth(createAuthDto: CreateAuthDto) {
    const createdAuth = new this.authModel(createAuthDto);
    const auth = await createdAuth.save();
    return auth;
  }

  async findAuthUserId(id: string) {
    const findAuth = this.authModel.find({ user: id });
    return findAuth;
  }
}

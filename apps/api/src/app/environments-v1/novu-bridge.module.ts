import { Module } from '@nestjs/common';
import { NovuClient, NovuHandler } from '@novu/framework/nest';

import { EnvironmentRepository, NotificationTemplateRepository } from '@novu/dal';
import { GetDecryptedSecretKey } from '@novu/application-generic';
import { NovuBridgeClient } from './novu-bridge-client';
import { ConstructFrameworkWorkflow } from './usecases/construct-framework-workflow';
import { NovuBridgeController } from './novu-bridge.controller';
import {
  ChatOutputRendererUsecase,
  ExpandEmailEditorSchemaUsecase,
  HydrateEmailSchemaUseCase,
  InAppOutputRendererUsecase,
  PushOutputRendererUsecase,
  RenderEmailOutputUsecase,
  SmsOutputRendererUsecase,
} from './usecases/output-renderers';

@Module({
  controllers: [NovuBridgeController],
  providers: [
    {
      provide: NovuClient,
      useClass: NovuBridgeClient,
    },
    NovuHandler,
    EnvironmentRepository,
    NotificationTemplateRepository,
    ConstructFrameworkWorkflow,
    GetDecryptedSecretKey,
    InAppOutputRendererUsecase,
    RenderEmailOutputUsecase,
    SmsOutputRendererUsecase,
    ChatOutputRendererUsecase,
    PushOutputRendererUsecase,
    RenderEmailOutputUsecase,
    ExpandEmailEditorSchemaUsecase,
    HydrateEmailSchemaUseCase,
  ],
})
export class NovuBridgeModule {}

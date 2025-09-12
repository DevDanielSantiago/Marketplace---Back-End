import { Module } from '@nestjs/common'

import { AuthenticateSellerController } from './controllers/authenticate-seller.controller'
import { RegisterSellerController } from './controllers/register-seller.controller'
import { CreateCategoryController } from './controllers/create-category.controller'
import { FetchAllCategoriesController } from './controllers/fetch-all-categories.controller'
import { CreateCategoryUseCase } from '@/domain/marketplace/application/use-cases/create-category'
import { DatabaseModule } from '../database/database.module'
import { FetchAllCategoriesUseCase } from '@/domain/marketplace/application/use-cases/fetch-all-categories'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { RegisterSellerUseCase } from '@/domain/marketplace/application/use-cases/register-seller'
import { AuthenticateSellerUseCase } from '@/domain/marketplace/application/use-cases/authenticate-seller'
import { GetSellerProfileController } from './controllers/get-seller-profile.controller'
import { GetSellerProfileUseCase } from '@/domain/marketplace/application/use-cases/get-seller-profile'
import { EditSellerController } from './controllers/edit-seller.controller'
import { EditSellerUseCase } from '@/domain/marketplace/application/use-cases/edit-seller'
import { RegisterProductViewUseCase } from '@/domain/marketplace/application/use-cases/register-product-view'
import { UploadAttachmenstController } from './controllers/upload-attachments.controller'
import { StorageModule } from '../storage/storage.module'
import { UploadAndCreateAttachmentUseCase } from '@/domain/marketplace/application/use-cases/upload-and-create-attachment'
import { GetAttachmentContentController } from './controllers/get-attachment-content.controller'
import { GetAttachmentContentUseCase } from '@/domain/marketplace/application/use-cases/get-attachment-content'
import { SignOutController } from './controllers/sign-out.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    RegisterSellerController,
    EditSellerController,
    GetSellerProfileController,
    AuthenticateSellerController,
    CreateCategoryController,
    FetchAllCategoriesController,
    UploadAttachmenstController,
    GetAttachmentContentController,
    SignOutController,
  ],
  providers: [
    RegisterSellerUseCase,
    EditSellerUseCase,
    GetSellerProfileUseCase,
    CreateCategoryUseCase,
    FetchAllCategoriesUseCase,
    AuthenticateSellerUseCase,
    RegisterProductViewUseCase,
    UploadAndCreateAttachmentUseCase,
    GetAttachmentContentUseCase,
  ],
})
export class httpModule {}

import { Module } from '@nestjs/common'

import { AuthenticateSellerController } from './controllers/authenticate-seller.controller'
import { RegisterSellerController } from './controllers/register-seller.controller'
import { CreateCategoryController } from './controllers/create-category.controller'
import { CreateProductController } from './controllers/create-product.controller'
import { FetchAllCategoriesController } from './controllers/fetch-all-categories.controller'
import { FetchAllProductsController } from './controllers/fetch-all-products.controller'
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
import { CreateProductUseCase } from '@/domain/marketplace/application/use-cases/create-product'
import { EditProductUseCase } from '@/domain/marketplace/application/use-cases/edit-product'
import { EditProductController } from './controllers/edit-product.controller'
import { GetProductByIdUseCase } from '@/domain/marketplace/application/use-cases/get-product-by-id'
import { GetProductByIdController } from './controllers/get-product-by-id.controller'
import { ChangeProductStatusController } from './controllers/change-product-status.controller'
import { FetchAllProductsUseCase } from '@/domain/marketplace/application/use-cases/fetch-all-products'
import { RegisterProductViewUseCase } from '@/domain/marketplace/application/use-cases/register-product-view'
import { CountSellerViewsUseCase } from '@/domain/marketplace/application/use-cases/count-seller-views'
import { CountSellerViewsPerDayUseCase } from '@/domain/marketplace/application/use-cases/count-seller-views-per-day'
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
    CreateProductController,
    GetProductByIdController,
    EditProductController,
    ChangeProductStatusController,
    FetchAllCategoriesController,
    FetchAllProductsController,
    UploadAttachmenstController,
    GetAttachmentContentController,
    SignOutController,
  ],
  providers: [
    RegisterSellerUseCase,
    EditSellerUseCase,
    GetSellerProfileUseCase,
    CountSellerViewsUseCase,
    CountSellerViewsPerDayUseCase,
    CreateCategoryUseCase,
    CreateProductUseCase,
    FetchAllProductsUseCase,
    GetProductByIdUseCase,
    EditProductUseCase,
    FetchAllCategoriesUseCase,
    AuthenticateSellerUseCase,
    RegisterProductViewUseCase,
    UploadAndCreateAttachmentUseCase,
    GetAttachmentContentUseCase,
  ],
})
export class httpModule {}

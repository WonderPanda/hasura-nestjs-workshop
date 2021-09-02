import { Test, TestingModule } from '@nestjs/testing';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

describe('ItemResolver', () => {
  let resolver: ItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemResolver, ItemService],
    }).compile();

    resolver = module.get<ItemResolver>(ItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

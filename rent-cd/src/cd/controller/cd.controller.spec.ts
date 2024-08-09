import { Test, TestingModule } from '@nestjs/testing';
import { CdController } from '../controller/cd.controller';

describe('CdController', () => {
  let controller: CdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdController],
    }).compile();

    controller = module.get<CdController>(CdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import {DefaultCrudRepository} from '@loopback/repository';
import {TestModel, TestModelRelations} from '../models';
import {MainDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestModelRepository extends DefaultCrudRepository<
  TestModel,
  typeof TestModel.prototype.id,
  TestModelRelations
> {
  constructor(
    @inject('datasources.Main') dataSource: MainDataSource,
  ) {
    super(TestModel, dataSource);
  }
}

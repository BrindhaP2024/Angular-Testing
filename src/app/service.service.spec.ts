import { TestBed } from '@angular/core/testing';
import { ServiceService } from './service.service';

fdescribe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceService],
    });
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial data', () => {
    expect(service.getData()).toEqual(['html', 'css', 'js']);
  });

  it('should add a new item to the data array', () => {
    service.addData('MongoDB');
    expect(service.getData()).toContain('MongoDB');
  });

  it('should remove an existing item from the data array', () => {
    service.removeData('Banana');
    expect(service.getData()).not.toContain('C++');
  });

  it('should not remove an item that does not exist', () => {
    const initialData = [...service.getData()];
    service.removeData('Python');
    expect(service.getData()).toEqual(initialData);
  });
});

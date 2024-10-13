import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoginButtonComponent } from './login-button.component';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginButtonComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    component = TestBed.createComponent(LoginButtonComponent).componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should call login API on login()', () => {
    const testUser = { username: 'testuser', password: 'password' };
    const mockResponse = { Token: 'dummyToken' };

    component.login();

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/auth/login'
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testUser);

    req.flush(mockResponse);

    expect(localStorage.getItem('authToken')).toEqual(mockResponse.Token);
    httpTestingController.verify();
  });
});

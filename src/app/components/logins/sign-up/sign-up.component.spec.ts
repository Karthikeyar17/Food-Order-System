import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

describe('SignupComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.SignUpForm = formBuilder.group({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.SignUpForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors: { [key: string]: any } = {};
    const name = component.SignUpForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // Name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set name to valid value
    name.setValue('Test User');
    expect(name.valid).toBeTruthy();
  });

  it('email field validity', () => {
    let errors: { [key: string]: any } = {};
    const email = component.SignUpForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to valid value
    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('mobile field validity', () => {
    let errors: { [key: string]: any } = {};
    const mobile = component.SignUpForm.controls['mobile'];
    expect(mobile.valid).toBeFalsy();

    // Mobile field is required
    errors = mobile.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set mobile to valid value
    mobile.setValue('1234567890');
    expect(mobile.valid).toBeTruthy();
  });

  it('password field validity', () => {
    let errors: { [key: string]: any } = {};
    const password = component.SignUpForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Password field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password to valid value
    password.setValue('testPassword');
    expect(password.valid).toBeTruthy();
  });

  it('confirmPassword field validity', () => {
    let errors: { [key: string]: any } = {};
    const confirmPassword = component.SignUpForm.controls['confirmPassword'];
    expect(confirmPassword.valid).toBeFalsy();

    // ConfirmPassword field is required
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set confirmPassword to valid value
    confirmPassword.setValue('testPassword');
    expect(confirmPassword.valid).toBeTruthy();
  });

  it('should have a submit button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[type="submit"]').textContent).toContain('Sign Up');
  });

});

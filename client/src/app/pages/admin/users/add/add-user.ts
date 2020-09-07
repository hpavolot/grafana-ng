import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/users.s';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { finalize } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

@Component({
  selector: 'admin-add-user',
  templateUrl: './add-user.html',
  
})
export class AdminAddUserComponent extends BaseComponent {
  public form: FormGroup;
  
	get name() {
		return this.form.get('name');
	}

	get email() {
		return this.form.get('email');
	}

	get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
  }
  
  constructor( 
		private userService: UserService,
		private router: Router,
		private activeRoute: ActivatedRoute ) {
      super();
  }
  
  ngOnInit(){
		this.form = new FormGroup({
			'name': new FormControl( null, Validators.required),
			'login': new FormControl( null, Validators.required),
			'password': new FormControl( null, Validators.required),
			'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
  
  onSubmit(){
		this.waiting = true
		
		this
			.userService
			.createUser( this.form.value )
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( x.message );
					this.router.navigate(['../'], { relativeTo: this.activeRoute })
				},
				e => Notes.error(	e.error?.message ?? ErrorMessages.BAD_CREATE_USER ));
	}
}

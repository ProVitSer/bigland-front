import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })


export class LoginComponent implements OnInit {
    private prevUrl: string | undefined;
    user = {
        login: '',
        password: ''
      };

    constructor(private route: ActivatedRoute){
        
    }

    ngOnInit(): void {
        this.prevUrl = this.route.snapshot.queryParams['prevUrl'];
    }
    
    onSubmit(f: NgForm) {}
    onPasswordResetClick() {}
}
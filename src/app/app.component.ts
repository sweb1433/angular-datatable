import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jobs';

  rows = [];
 
  ngOnInit() {
    this.fetch((data) => {
      this.rows = data;
      console.log(data)
    });
  }

  fetch(cb) { 

    


    const req = new XMLHttpRequest();
    req.open('GET', `./assets/jobs.json`);
    // req.setRequestHeader('Access-Control-Allow-Origin','https://nut-case.s3.amazonaws.com');
    // req.withCredentials = true;
 
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
 
    req.send();
  }

}



// fetch(data){
  //     const headers = new Headers();
  //     headers.append('Access-Control-Allow-Origin', '*');
  //     this.http.get('https://nut-case.s3.amazonaws.com/jobs.json',{ headers: headers }).subscribe(res=>{
  //     data = res.json(); 
  //   console.log(data);       })
  // }

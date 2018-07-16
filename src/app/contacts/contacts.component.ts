import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contacts = [];
  contact = {};
  addNewContact: Boolean;
  editContact: Boolean;
  
  constructor() {
	  this.contacts = [{FirstName: "Sarah", LastName: "Kane", Id: 1, Email:"kanesarah@xyz.com", PhoneNumber: 1234567890, IsActive: true},
		{FirstName: "John", LastName: "Doe", Id: 2, Email:"johndoe@abc.com", PhoneNumber: 9977886655, IsActive: true}
	  ];
	  this.contact = {};
	  this.addNewContact = false;
	  this.editContact = false;
  }
  
  ngOnInit() {}
  
  ShowEditContactForm(contact) {
	  this.editContact = true;
	  this.addNewContact = false;	  
	  this.contact = contact;
  }

  ShowAddContactForm() {
	  this.contact = {FirstName: "", LastName: ""};
	  this.addNewContact = true;
	  this.editContact = false;
  }
  
  AddContact(contact) {
	  contact.IsActive = true;
	  this.contacts.push(contact);
	  this.addNewContact = false;	  
	  this.contact = {};
  }
  
  DeleteContact(contact) {
	  for(let index = 0; index < this.contacts.length; index++) {
		  if(this.contacts[index].Id == contact.Id)
			  this.contacts[index].IsActive = false;
	  }
  }
  
  SaveContact(contact) {
	  for(let index = 0; index < this.contacts.length; index++) {
		  if(this.contacts[index].Id == contact.Id)
			  this.contacts[index] = contact;
	  }
	  this.editContact = false;	
	  this.contact = {};
  }  
}

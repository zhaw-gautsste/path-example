/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "My new app",
            "_id": "5ccf671053966f2b8c043271",
            "pageList": [
                {
                    "id": "taskpage",
                    "name": "Task",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        }
                    ]
                },
                {
                    "id": "taskspage",
                    "name": "Tasks",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "TaskForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "NewTask",
                            "icon": "list-alt",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "TaskList",
                            "icon": "address-book",
                            "color": "purple",
                            "page": "taskpage",
                            "type": "list",
                            "newRow": true,
                            "search": true,
                            "url": "/task",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "Person",
                    "name": "Person",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "PersonForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "EditPerson",
                            "icon": "user",
                            "color": "green",
                            "page": null,
                            "type": "button",
                            "width": 2
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Hobbies",
                            "icon": "sun",
                            "color": "orange",
                            "page": "hobbiespage",
                            "type": "button",
                            "width": 2
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Task",
                            "icon": "address-book",
                            "color": "purple",
                            "page": "taskpage",
                            "type": "button",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "contactspage",
                    "name": "Contacts",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "PersonForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "NewPerson",
                            "icon": "user",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "PersonList",
                            "icon": "user",
                            "color": "blue",
                            "page": "Person",
                            "type": "list",
                            "newRow": true,
                            "search": true,
                            "url": "/person",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "projectspage",
                    "name": "Projects",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "ProjectForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "NewProject",
                            "icon": "square",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "ProjectForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "ProjectList",
                            "icon": "square",
                            "color": "yellow",
                            "page": "projectspage",
                            "type": "list",
                            "newRow": true,
                            "search": true,
                            "url": "/project",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "hobbiespage",
                    "name": "Hobbies",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "HobbyForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "NewHobby",
                            "icon": "sun",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "HobbyForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "HobbyList",
                            "icon": "sun",
                            "color": "orange",
                            "page": null,
                            "type": "list",
                            "newRow": true,
                            "search": true,
                            "url": "/hobby",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "companiespage",
                    "name": "Companies",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "CompanyForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "EditCompany",
                            "icon": "square",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "CompanyList",
                            "icon": "window-restore",
                            "color": "lime",
                            "page": "companypage",
                            "type": "list",
                            "newRow": true,
                            "search": true,
                            "url": "/company",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "companypage",
                    "name": "Company",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "type": "backbutton",
                            "name": "BackButton"
                        },
                        {
                            "details": [],
                            "form": {
                                "form": "CompanyForm"
                            },
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "EditCompany",
                            "icon": "surprise",
                            "color": "green",
                            "page": null,
                            "type": "newButton",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Contacts",
                            "icon": "user",
                            "color": "blue",
                            "page": "contactspage",
                            "type": "button",
                            "width": 1
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Companies",
                            "icon": "square",
                            "color": "lime",
                            "page": "companiespage",
                            "type": "button",
                            "width": 1
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Projects",
                            "icon": "address-card",
                            "color": "yellow",
                            "page": "projectspage",
                            "type": "button",
                            "width": 1
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Hobbies",
                            "icon": "sun",
                            "color": "orange",
                            "page": "hobbiespage",
                            "type": "button",
                            "width": 1
                        },
                        {
                            "details": [],
                            "buttons": [],
                            "buttonGroup": [],
                            "name": "Tasks",
                            "icon": "list-alt",
                            "color": "purple",
                            "page": "taskspage",
                            "type": "button",
                            "width": 1
                        }
                    ]
                }
            ],
            "formList": [
                {
                    "title": "Person",
                    "id": "PersonForm",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "deleteButton",
                            "name": "DeleteButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "cancelButton",
                            "name": "CancelButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "okButton",
                            "name": "OkButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "FamilyName",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 20
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "FirstName",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 20
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Company",
                            "required": false,
                            "wordSearchEnabled": true,
                            "url": "/company",
                            "type": "autocomplete",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Birthday",
                            "required": false,
                            "type": "date",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Files",
                            "url": "/upload",
                            "type": "fileUpload",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Comments",
                            "required": false,
                            "type": "text",
                            "height": 4,
                            "width": 2,
                            "maxLength": 100
                        }
                    ]
                },
                {
                    "title": "Project",
                    "id": "ProjectForm",
                    "url": "/project",
                    "formFieldList": [
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "okButton",
                            "name": "OkButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "cancelButton",
                            "name": "CancelButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "deleteButton",
                            "name": "DeleteButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "ProjectName",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 20
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Company",
                            "required": true,
                            "wordSearchEnabled": true,
                            "url": "/company",
                            "type": "autocomplete",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "StartDate",
                            "required": false,
                            "type": "date",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "EndDate",
                            "required": false,
                            "type": "date",
                            "width": 2
                        },
                        {
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Low",
                                    "key": 1
                                },
                                {
                                    "type": "radio",
                                    "name": "Medium",
                                    "key": 2
                                },
                                {
                                    "type": "radio",
                                    "name": "High",
                                    "key": 3
                                },
                                null
                            ],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Priority",
                            "required": false,
                            "type": "RadioGroupField",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [
                                {
                                    "name": "Product",
                                    "key": 1
                                },
                                {
                                    "name": "Service",
                                    "key": 2
                                },
                                null,
                                null
                            ],
                            "acceptedFileTypes": [],
                            "name": "Type",
                            "required": false,
                            "type": "CheckboxGroupField",
                            "width": 2
                        }
                    ]
                },
                {
                    "title": "Task",
                    "id": "TaskForm",
                    "url": "/task",
                    "formFieldList": [
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "cancelButton",
                            "name": "CancelButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "okButton",
                            "name": "OkButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "deleteButton",
                            "name": "DeleteButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "TaskName",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 20
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "ProjectName",
                            "required": true,
                            "wordSearchEnabled": true,
                            "url": "/project",
                            "type": "autocomplete",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "StartDate",
                            "required": false,
                            "type": "date",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "EndDate",
                            "required": false,
                            "type": "date",
                            "width": 2
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Comments",
                            "required": false,
                            "type": "text",
                            "height": 4,
                            "width": 2,
                            "maxLength": 100
                        }
                    ]
                },
                {
                    "title": "Hobby",
                    "id": "HobbyForm",
                    "url": "/hobby",
                    "formFieldList": [
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "cancelButton",
                            "name": "CancelButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "okButton",
                            "name": "OkButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "deleteButton",
                            "name": "DeleteButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "HobbyName",
                            "required": true,
                            "type": "Translation",
                            "width": 2
                        }
                    ]
                },
                {
                    "title": "Company",
                    "id": "CompanyForm",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "cancelButton",
                            "name": "CancelButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "deleteButton",
                            "name": "DeleteButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "type": "okButton",
                            "name": "OkButton"
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "CompanyName",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 30
                        },
                        {
                            "radios": [],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "City",
                            "required": true,
                            "type": "text",
                            "height": 1,
                            "width": 2,
                            "maxLength": 30
                        },
                        {
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "A-Rating",
                                    "key": 1
                                },
                                {
                                    "type": "radio",
                                    "name": "B-Rating",
                                    "key": 2
                                },
                                {
                                    "type": "radio",
                                    "name": "C-Rating",
                                    "key": 3
                                },
                                {
                                    "type": "radio",
                                    "name": "D-Rating",
                                    "key": 4
                                }
                            ],
                            "data": [],
                            "acceptedFileTypes": [],
                            "name": "Rating",
                            "required": false,
                            "type": "RadioGroupField",
                            "width": 2
                        }
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}

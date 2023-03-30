import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {

  contentForm: FormGroup;
  isUpdate: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private contentService: ContentService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.contentForm = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      imageUrl: [''],
      author: ['']
    });
  }

  onSubmit(): void {
    const content = this.contentForm.value;
    const id = content.id;

    // If ID is not provided, add new content
    if (!id) {
      this.contentService.addContent(content).subscribe(newContent => {
        this.messageService.add(`Content "${newContent.title}" added successfully!`);
        this.contentForm.reset();
      });
    } else { // Update existing content
      this.contentService.getContent(id).subscribe(existingContent => {
        if (existingContent) {
          this.contentService.updateContent(id, content).subscribe(updatedContent => {
            this.messageService.add(`Content "${updatedContent.title}" updated successfully!`);
            this.isUpdate = false;
            this.contentForm.reset();
          });
        } else {
          this.messageService.add(`Content with ID "${id}" does not exist.`);
        }
      });
    }
  }

  onIdChange(): void {
    const id = this.contentForm.value.id;
    if (id) {
      this.contentService.getContent(id).subscribe(existingContent => {
        if (existingContent) {
          this.isUpdate = true;
        } else {
          this.messageService.add(`Content with ID "${id}" does not exist.`);
          this.isUpdate = false;
        }
      });
    } else {
      this.isUpdate = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {

  contentForm: FormGroup;
  isUpdate: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModifyContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string; content: Content },
              private formBuilder: FormBuilder,
              private contentService: ContentService,
              private messageService: MessageService) { }

  ngOnInit(): void {

    this.dialogTitle = `${this.data.mode === 'add' ? 'Add' : 'Update'} ${
      this.data.content.contentType
    }`;

    if (this.data.mode === 'update') {
      this.contentForm.patchValue({
        id: this.data.content.id,
        title: this.data.content.title,
        description: this.data.content.description,
        contentType: this.data.content.contentType,
        url: this.data.content.url,
      });
    }
  }

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
  openDialog(): void {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '500px',
      data: { title: 'Add Movie', type: 'movie' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addContent(result);
      }
    });
  }


}

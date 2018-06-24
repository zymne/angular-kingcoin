import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
	
	@Input()
	itemId: number

  uploaderOptions = {
        browse_button: 'pickfiles',
        // General settings
		runtimes : 'html5,html4',
		url : '',
	 
		// Maximum file size
		max_file_size : '2mb',
	 
		chunk_size: '1mb',
	 
		// Resize images on clientside if we can
		// resize : {
		//     width : 200,
		//     height : 200,
		//     quality : 90,
		//     crop: true // crop to exact dimensions
		// },
	 
		// Specify what files to browse for
		filters : [
		    {title : "Image files", extensions : "jpg,gif,png"},
		    {title : "Zip files", extensions : "zip,avi"}
		],
	 
		// Rename files by clicking on their titles
		rename: true,
		 
		// Sort files
		sortable: true,
	 
		// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
		dragdrop: true,
	 
		// Views to activate
		views: {
		    list: false,
		    thumbs: true, // Show thumbs
		    active: 'thumbs'
		},
	 
		// Flash settings
		flash_swf_url : '/plupload/js/Moxie.swf',
	     
		// Silverlight settings
		silverlight_xap_url : '/plupload/js/Moxie.xap',
		
		preinit : {
		    Init: function(up, info) {
			 
		    }	 		    
		}
}

  //uploader = new plupload.Uploader(this.uploaderOptions);

  constructor() { }

  startUpload() {
		this.itemId = 1;		
		console.log('startUpload() method called')
		//this.uploader.start();
		$('#image_uploader').setOption('url', 'http://localhost:8081/upload/' + this.itemId)
  }

  ngOnInit() {    
    this.uploaderOptions.url = 'http://localhost:8081/upload/' + this.itemId;
		$('#image_uploader').plupload(this.uploaderOptions);
		
    //this.uploader.setOption('browse_button', 'pickfiles')
    //this.uploader.setOption('container', 'image_uploader')    
    //this.uploader.init();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  
  uploaderOptions = {
    // General settings
    runtimes : 'html5',
    url : 'http://localhost:8081/upload',
    chunk_size : '1mb',
    unique_names : true,

    // Resize images on client-side if we can
    resize : { width : 320, height : 240, quality : 90 },
    
    filters : {
        max_file_size : '10mb',

  // Specify what files to browse for
        mime_types: [
            {title : "Image files", extensions : "jpg,gif,png"},
            {title : "Zip files", extensions : "zip"},
            {title : "GPS files", extensions : "gpx"}
        ]
    },

    flash_swf_url : '../js/Moxie.swf',
    silverlight_xap_url : '../js/Moxie.xap',
     
    // PreInit events, bound before the internal events
    preinit : {
        Init: function(up, info) {
            //log('[Init]', 'Info:', info, 'Features:', up.features);
        },

        UploadFile: function(up, file) {
            //log('[UploadFile]', file);

            // You can override settings before the file is uploaded
            // up.setOption('url', 'upload.php?id=' + file.id);
            // up.setOption('multipart_params', {param1 : 'value1', param2 : 'value2'});
        }
    },

    // Post init events, bound after the internal events
    init : {
        
      PostInit: function() {
        // Called after initialization is finished and internal event handlers bound                            
      },

      Browse: function(up) {
          // Called when file picker is clicked
          //log('[Browse]');
      },

      Refresh: function(up) {
          // Called when the position or dimensions of the picker change
          //log('[Refresh]');
      },

      StateChanged: function(up) {
          // Called when the state of the queue is changed
          //log('[StateChanged]', up.state == plupload.STARTED ? "STARTED" : "STOPPED");
      },

      QueueChanged: function(up) {
          // Called when queue is changed by adding or removing files
          //log('[QueueChanged]');
      },

      OptionChanged: function(up, name, value, oldValue) {
        // Called when one of the configuration options is changed
        //log('[OptionChanged]', 'Option Name: ', name, 'Value: ', value, 'Old Value: ', oldValue);
      },

      BeforeUpload: function(up, file) {
        // Called right before the upload for a given file starts, can be used to cancel it if required
        //log('[BeforeUpload]', 'File: ', file);
      },

      UploadProgress: function(up, file) {
          // Called while file is being uploaded
          //log('[UploadProgress]', 'File:', file, "Total:", up.total);
      },

      FileFiltered: function(up, file) {
        // Called when file successfully files all the filters
                //log('[FileFiltered]', 'File:', file);
      },

      FilesAdded: function(up, files) {
          // Called when files are added to queue
          //log('[FilesAdded]');

          plupload.each(files, function(file) {
              //log('  File:', file);
          });
      },

      FilesRemoved: function(up, files) {
          // Called when files are removed from queue
          //log('[FilesRemoved]');

          plupload.each(files, function(file) {
              //log('  File:', file);
          });
      },

      FileUploaded: function(up, file, info) {
          // Called when file has finished uploading
          //log('[FileUploaded] File:', file, "Info:", info);
      },

      ChunkUploaded: function(up, file, info) {
          // Called when file chunk has finished uploading
          //log('[ChunkUploaded] File:', file, "Info:", info);
      },

      UploadComplete: function(up, files) {
        // Called when all files are either uploaded or failed
                //log('[UploadComplete]');
      },

      Destroy: function(up) {
        // Called when uploader is destroyed
                //log('[Destroy] ');
      },

      Error: function(up, args) {
          // Called when error occurs
          //log('[Error] ', args);
      }
    }
}

  uploader = new plupload.Uploader(this.uploaderOptions);

  constructor() { }

  startUpload() {
    console.log('startUpload() method called')
    this.uploader.start();
  }

  ngOnInit() {
    this.uploader.setOption('browse_button', 'pickfiles')
    this.uploader.init();
  }

}

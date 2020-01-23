class Toast {

  getToast = (message, type) =>
    `<div id="app-toast" class="toast fade show app-toast" role="alert">
      <div class="toast-header">
        <strong class="mr-auto">${type}</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
          <span class="app-toast-close-button">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>`
}

let instance = null;

instance = instance ? instance : new Toast();

export default instance;
import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';

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

  dismiss = (event) => {
    let classes = event.target.className.split(' ');

    if (classes.includes(FIELD_TO_CLASS_MAP.toastCloseButton.split('.')[1])) {
      let appToastRoot = document.querySelector(FIELD_TO_CLASS_MAP.appToastRoot);
      appToastRoot.innerHTML = "";
    }
  }

  notify = (message, type) => {
    let toast = this.getToast(message, type);
    let appToastRoot = document.querySelector(FIELD_TO_CLASS_MAP.appToastRoot);

    appToastRoot.insertAdjacentHTML('afterbegin', toast);

    let toastCloseButton = document.querySelector(FIELD_TO_CLASS_MAP.toastCloseButton);
    toastCloseButton.addEventListener("click", this.dismiss);
  }
}

let instance = null;

instance = instance ? instance : new Toast();

export default instance;
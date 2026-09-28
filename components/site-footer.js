class ByteSpaceFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.rendered) return;

    this.dataset.rendered = "true";
    this.style.display = "block";

    const spacing = this.hasAttribute("spaced") ? "mt-16 " : "";
    this.innerHTML = `
      <footer class="${spacing}border-t border-slate-200 pb-[env(safe-area-inset-bottom,0px)]">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 pt-12 md:grid-cols-2">
          <div>
            <a href="#" class="flex items-center gap-1 text-lg font-bold"><span class="text-4xl font-black leading-none text-[#D7F634]">b</span>ByteSpace</a>
            <p class="mt-3 text-xs">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <div class="mt-6 flex max-w-md gap-3">
              <input type="email" placeholder="Enter your email" class="w-full rounded-full border border-slate-200 px-5 py-2.5 text-xs outline-none focus:border-[#2A33E6]">
              <button class="rounded-full bg-[#D7F634] px-6 text-xs font-bold">Search</button>
            </div>
            <p class="mt-3 max-w-md text-[10px] text-slate-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div class="grid grid-cols-3 gap-6 text-xs md:pl-16">
            <ul class="space-y-4"><li>Featured Courses</li><li>Featured Categories</li><li>Business</li><li>IT</li><li>Design</li></ul>
            <ul class="space-y-4"><li>Development</li><li>Marketing</li><li>Photography</li><li>Finance</li><li>Sport</li></ul>
            <ul class="space-y-4"><li>Become a Creator</li><li>Affiliate Program</li><li>Contact</li><li>Help</li><li>About</li></ul>
          </div>
        </div>
        <div class="mx-auto mt-14 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-4 py-6 text-[11px] text-slate-600">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <div class="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></div>
        </div>
      </footer>`;
  }
}

customElements.define("bytespace-footer", ByteSpaceFooter);
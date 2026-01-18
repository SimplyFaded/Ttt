function openTab(id) {
    document.querySelectorAll(".tab").forEach(tab =>
        tab.classList.remove("active")
    );
    document.getElementById(id).classList.add("active");
}

const BETA_PASSWORD = "123@";

function unlockBeta() {
    if (document.getElementById("betaPassword").value === BETA_PASSWORD) {
        document.getElementById("betaLock").classList.add("hidden");
        document.getElementById("betaContent").classList.remove("hidden");
    }
}

function openImage(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

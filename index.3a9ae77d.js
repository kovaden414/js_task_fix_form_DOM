document.querySelectorAll("div.field > input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.replace(/([A-Z])/g," $1"),e.setAttribute("placeholder",e.name.replace(/([A-Z])/g," $1").toUpperCase()),e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.3a9ae77d.js.map

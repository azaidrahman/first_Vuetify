export default {
  install: (app) => {
    // Add a global $formatDate method
    app.config.globalProperties.$formatDate = (date, format = "YYYY-MM-DD") => {
      if (!date) return "";

      const d = new Date(date);

      // Check if date is valid
      if (isNaN(d.getTime())) return "Invalid Date";

      // Basic formatting options
      const formatters = {
        YYYY: d.getFullYear(),
        MM: String(d.getMonth() + 1).padStart(2, "0"),
        DD: String(d.getDate()).padStart(2, "0"),
        HH: String(d.getHours()).padStart(2, "0"),
        mm: String(d.getMinutes()).padStart(2, "0"),
        ss: String(d.getSeconds()).padStart(2, "0"),
        M: d.getMonth() + 1,
        D: d.getDate(),
        H: d.getHours(),
        m: d.getMinutes(),
        s: d.getSeconds(),
      };

      // Replace format tokens with actual values
      return format.replace(
        /YYYY|MM|DD|HH|mm|ss|M|D|H|m|s/g,
        (match) => formatters[match],
      );
    };

    // Also create a composable for use in script setup
    app.provide("formatDate", (date, format = "YYYY-MM-DD") => {
      return app.config.globalProperties.$formatDate(date, format);
    });
  },
};

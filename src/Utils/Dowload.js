import * as XLSX from "xlsx/xlsx.mjs";

class MyDownloader {
  download = async (data, fileName = "Data") => {
    try {
      const datas = data?.length ? data : [];
      const worksheet = XLSX.utils.json_to_sheet(datas);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
    } catch (error) {
      console.error(`[+] Error While Downloading`, error);
      return;
    }
  };
}

const downloader = new MyDownloader();

export default downloader;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Utils
{
    public class Store_Local_File : IStorageFile
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IHttpContextAccessor httpContextAccessor;

        public Store_Local_File(IWebHostEnvironment webHostEnvironment ,IHttpContextAccessor httpContextAccessor)
        {
            this.webHostEnvironment = webHostEnvironment;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> Create(byte[] file, string contentType, string extension, string container, string name)
        {
            string wwwrootPath = webHostEnvironment.WebRootPath;
            if (string.IsNullOrEmpty(wwwrootPath))
            {
                throw new Exception();
            }

            string FolderFile = Path.Combine(wwwrootPath, container);
            if (!Directory.Exists(FolderFile))
            {
                Directory.CreateDirectory(FolderFile);
            }

            string nameFinal = $"{name}{extension}";
            string rootFinal = Path.Combine(FolderFile, nameFinal);

            await File.WriteAllBytesAsync(rootFinal, file);

            string UrlCurrent = $"{httpContextAccessor.HttpContext.Request.Scheme}://{httpContextAccessor.HttpContext.Request.Host}";

            string dbUrl = Path.Combine(UrlCurrent, container, nameFinal).Replace("\\", "/");

            return dbUrl;

        }

        public Task Delete(string route, string container)
        {
            string wwwrootPath = webHostEnvironment.WebRootPath; 

            if (string.IsNullOrEmpty(wwwrootPath))
            {
                throw new Exception();
            }

            var nameFile = Path.GetFileName(route);

            string pathFinal = Path.Combine(wwwrootPath,container,nameFile);

            if (File.Exists(pathFinal))
            {
                File.Delete(pathFinal);
            }

            return Task.CompletedTask;

        }
    }
}

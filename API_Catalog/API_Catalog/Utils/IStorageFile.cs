using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Utils
{
     public  interface IStorageFile
    {
        public Task <string> Create(byte[] file, string contentType, string extension, string container, string name);

        public Task Delete(string route, string container);


    }
}

using API_Catalog.Dtos;
using API_Catalog.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Utils
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Products, ProductsDtos>().ReverseMap();
            CreateMap<ProductsDtos, Products>();

            CreateMap<Categories, CategoriesDtos>().ReverseMap();
            CreateMap<CategoriesDtos, Categories>();


        }
  
    }
}

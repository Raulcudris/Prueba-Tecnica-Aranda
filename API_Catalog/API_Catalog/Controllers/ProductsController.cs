using Amazon.DynamoDBv2.Model;
using API_Catalog.Context;
using API_Catalog.Dtos;
using API_Catalog.Models;
using API_Catalog.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly IStorageFile _istorageFile;

        public ProductsController(AppDbContext context, IMapper mapper, IStorageFile istorageFile)
        {
            _context = context;
            _mapper = mapper;
            _istorageFile = istorageFile;
        }
        // GET: api/Products
        [HttpGet]
        public async Task<List<ProductsDtos>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return _mapper.Map<List<ProductsDtos>>(products);
        }


        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProducts(int id)
        {
            var products = await _context.Products.FirstOrDefaultAsync(x => x.Product_Id == id);
            var result = _mapper.Map<Products, ProductsDtos>(products);
            return Ok(result);
        }

        //// POST: api/Products
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Products>> PostProducts(Products products)
        //{
        //    _context.Products.Add(products);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetProducts", new { id = products.Product_Id }, products);
        //}

        [HttpPost]
        public async Task<ActionResult> PostProducts([FromForm] CreateProductsDtos createProductDtos)
        {
            var entity = _mapper.Map<Products>(createProductDtos);

            if (createProductDtos.Image != null)
            {
                string Img_Url = await SaveImg(createProductDtos.Image);
                entity.Image = Img_Url;
            }
            _context.Add(entity);

            await _context.SaveChangesAsync();

            var products = _mapper.Map<ProductsDtos>(entity);

            return new CreatedAtActionResult(nameof(GetProducts), "GetProducts", new { id = entity.Product_Id }, products);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducts(int id,[FromForm] CreateProductsDtos createProductDtos)
        {
            var entity = await _context.Products.FirstOrDefaultAsync(a => a.Product_Id == id);
            if (entity == null)
            {
                return NotFound();
            }

            _mapper.Map(createProductDtos, entity);
            if (createProductDtos.Image != null)
            {
                if (string.IsNullOrEmpty(entity.Image))
                {
                   await  _istorageFile.Delete(entity.Image, Constants.ContainerFile.ContainerProducts);
                }               
                string img_url = await SaveImg(createProductDtos.Image);
                entity.Image = img_url;
            }

            _context.Entry(entity).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();

        }


        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutProducts(int id, Products products)
        //{
        //    if (id != products.Product_Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(products).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UsersExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}
        //private bool UsersExists(int id)
        //{
        //    return _context.Products.Any(e => e.Product_Id == id);
        //}

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Products>> DeleteProducts(int id)
        {
            var products = await _context.Products.FindAsync(id);
            if (products == null)
            {
                return NotFound();
            }

            _context.Products.Remove(products);
            await _context.SaveChangesAsync();

            return products;
        }

        private async Task<string> SaveImg(IFormFile img)
        {
            using var stream = new MemoryStream();

            await img.CopyToAsync(stream);

            var FileBytes = stream.ToArray();

            return await _istorageFile
                .Create(FileBytes,img.ContentType,Path.GetExtension(img.FileName),Constants.ContainerFile.ContainerProducts,Guid.NewGuid().ToString());

        }


    }
}

USE [Catalog_Products]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 4/11/2022 7:22:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Categ_Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](120) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Categ_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 4/11/2022 7:22:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Product_Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](120) NOT NULL,
	[Description] [varchar](150) NOT NULL,
	[Categ_Id] [int] NOT NULL,
	[Image] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Product_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (1, N'Libros
')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (2, N'Calzado')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (3, N'Alimentos')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (4, N'Ropa')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (5, N'Electrodomestico')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (6, N'Tecnologia')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (7, N'Papeleria')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (8, N'Herramientas')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (9, N'Muebles')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (10, N'Bebidas
')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (11, N'Perfumeria')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (12, N'Farmaceutica
')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (13, N'Mascotas
')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (14, N'Aseo
')
INSERT [dbo].[Categories] ([Categ_Id], [Name]) VALUES (15, N'Belleza
')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (1, N'Cien años de Soledad', N'gabriel garcia marquez', 1, N'Imagen1')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (2, N'La iliada', N'Epopeya de homero', 1, N'Imagen2')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (3, N'zapatilla nike', N'Calzado deportivo
', 2, N'Imagen3')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (4, N'Sandalias', N'Playera de damas', 2, N'Imagen4')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (5, N'Huevos', N'Canasta de 30 unidades
', 3, N'Imagen5')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (6, N'Leche deslatosada', N'Caja de 1 litro
', 3, N'Imagen6')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (7, N'Televisores', N'Samsumg', 5, N'Imagen7')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (8, N'Lavadora', N'Lavadora samsumg', 5, N'Imagen8')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (9, N'Horno microondas', N'Horno tecnologico', 5, N'Imagen9')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (10, N'Celular Samsung', N'Telefono Inteligente marca Samsung', 6, N'Imagen10')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (11, N'Celular Motorola', N'Telefono Inteligente marca Motorola', 6, N'Imagen11')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (12, N'Cuaderno ', N'Cuaderno rayado de 100 hojas', 7, N'Imagen12')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (13, N'Cuaderno ', N'Cuaderno Cuadriculado de 100 hojas', 7, N'Imagen13')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (14, N'Block Carta', N'Block rayado de 100 hojas', 7, N'Imagen14')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (15, N'Block Oficio', N'Block oficio de 100 hojas', 7, N'Imagen15')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (16, N'Cama ', N'Cama de 1 cuerpo', 9, N'Imagen16')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (17, N'Sofa', N'Sofa para la sala', 9, N'Imagen17')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (18, N'Mesa', N'Mesa de comedor', 9, N'Imagen18')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (19, N'Gaseosa coca cola', N'Gaseosa coca cola', 11, N'Imagen19')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (20, N'Gaseosa Pepsi', N'Gaseosa Pepsi', 11, N'Imagen20')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (21, N'Cerveza', N'Buibuedser', 11, N'Imagen21')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (22, N'Nitro', N'Perfume para Hombre', 12, N'Imagen22')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (23, N'angeles', N'Perfume para mujer', 12, N'Imagen23')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (24, N'Dolex', N'Medicamento', 13, N'Imagen24')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (25, N'Collar para perro', N'Collar para perro', 14, N'Imagen25')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (26, N'Arena para gato', N'arena para gatos', 14, N'Imagen26')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (27, N'Escoba', N'Escoba para barrer', 15, N'Imagen27')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (28, N'Recogedores', N'Palas para recoger basura', 15, N'Imagen28')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (29, N'Bolsas', N'Bolsa para depositar elementos', 15, N'Imagen29')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (30, N'Cepillos', N'Cepillo de dientes', 15, N'Imagen30')
INSERT [dbo].[Products] ([Product_Id], [Name], [Description], [Categ_Id], [Image]) VALUES (31, N'Guantes', N'Guantes amarrillo', 15, N'Imagen31')
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([Categ_Id])
REFERENCES [dbo].[Categories] ([Categ_Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO

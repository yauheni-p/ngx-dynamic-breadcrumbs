# ngx-dynamic-breadcrumbs
### Angular breadcrumbs

![img.png](img.png)
## Install

Run `npm i ngx-dynamic-breadcrumbs` to install.

## Usage
1) Import BreadcrumbsModule into your root module.

![img_1.png](img_1.png)

2) Create a resolver, inject BreadcrumbsService.
   If you need some data from back-end, fetch it, and using rxjs tap operator, set breadcrumbs array. If you want to hide breadcrumbs for specific routes, use clear() method of BreadcrumbsService.

![img_3.png](img_3.png)

3) Add the resolver to route

![img_2.png](img_2.png)

## Customization

It is possible to customize a divider:
![img_4.png](img_4.png)

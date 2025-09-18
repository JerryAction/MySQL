# MySQL
#MySQL 运维 #DBA 日常 #效率神器

小工具 001《MySQL参数基线查询系统》

此属于其中一个小项目（1个html和一个js）通过打开html文件，可以在搜索框中查询参数的基线设置。
也可以在js中添加自定义的参数解释。目的是 快速查询某个项目的基线配置和自定义的参数解释。

📚MySQL 参数查询神器✨3 秒定位基线值！

🔍输入参数名秒出基线值 + 业务定制解析

📝支持自定义注释 / 版本对比

使用方式：mysql_search_cnf.html 和 mysql_cnf.js 放在同级路径下，双击html文件即可。

![image](https://github.com/user-attachments/assets/d42c5c33-3d55-482d-8034-dab5b6467dc4)

小工具 002 《MySQL参数对比工具》

单html文件，可本地运行。路径在项目 <002 MySQL 参数对比工具>目录下 ，文件名：mysql_diff_cnf.html 
用于对比MySQL 5.7和MySQL 8.0版本的参数配置差异。(上传或是复制基线参数和非基线参数进行对比)
类似pt-config-diff 的补充，因为pt-config-diff 是在线对比MySQL运行态的参数，mysql_diff_cnf.html 是对比静态cnf参数。

使用方式：双击 mysql_diff_cnf.html 文件即可。

https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAECIgxoy3W3gmIrm3WB_a9BSwtbz313RwAChBsAAr4MWVa5p4bTXLn5RjYE.png

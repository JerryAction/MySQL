const mysqlParams = {
    // 基础参数
    'port': {
        suggestion: () => '自定义',
        explanation: 'MySQL服务监听的端口号。默认值为3306。'
    },
    'server_id': {
        suggestion: () => '自定义',
        explanation: '服务器在复制环境中的唯一标识ID,推荐设置为IP地址后两位+端口号，如97253306'
    },
    'basedir': {
        suggestion: () => '自定义',
        explanation: 'MySQL软件的安装目录。如/data/mysql/base/5.7.43'
    },
    'datadir': {
        suggestion: () => '自定义',
        explanation: '数据文件存储目录。如/data/mysql/data/3306'
    },
    'log_bin': {
        suggestion: () => '自定义',
        explanation: '二进制日志文件的路径。如/data/mysql/log/binlog/3306/mysql-bin'
    },
    'tmpdir': {
        suggestion: () => '自定义',
        explanation: '临时文件目录。如/data/mysql/tmp/3306'
    },
    'relay_log': {
        suggestion: () => '自定义',
        explanation: '中继日志文件的路径。如/data/mysql/log/relaylog/3306/relay-bin'
    },
    'innodb_log_group_home_dir': {
        suggestion: () => '自定义',
        explanation: 'InnoDB日志组的目录。如/data/mysql/log/redolog/3306'
    },
    'log_error': {
        suggestion: () => 'mysql-error.log',
        explanation: '错误日志文件路径。默认路径是datadir下的mysql-error.log'
    },
    'report_host': {
        suggestion: () => '自定义',
        explanation: '本机的IP地址。如172.25.97.25'
    },
    'report_port': {
        suggestion: () => '自定义',
        explanation: '报告的端口号。如3306'
    },
    // BINLOG相关参数
    'binlog_error_action': {
        suggestion: () => 'ABORT_SERVER',
        explanation: '二进制日志写入错误时的动作。默认行为是服务关闭，表现为crash。'
    },
    'binlog_format': {
        suggestion: () => 'row',
        explanation: '二进制日志格式。'
    },
    'binlog_rows_query_log_events': {
        suggestion: () => '1',
        explanation: '是否记录行模式下的查询事件。'
    },
    'log_slave_updates': {
        suggestion: () => '1',
        explanation: '从库是否将复制的事件记录到自己（本地）的二进制日志中。'
    },
    'master_info_repository': {
        suggestion: () => 'TABLE',
        explanation: '主库信息存储的位置。'
    },
    'max_binlog_size': {
        suggestion: () => '256M',
        explanation: '单个二进制日志文件的最大大小。'
    },
    'relay_log_info_repository': {
        suggestion: () => 'TABLE',
        explanation: '中继日志信息存储的位置。'
    },
    'relay_log_recovery': {
        suggestion: () => '1',
        explanation: '中继日志恢复功能。'
    },
    'sync_binlog': {
        suggestion: () => '1',
        explanation: '推荐设置为1，事务提交后，将二进制日志文件写入磁盘并立即刷新，相当于同步写入磁盘，不经过系统缓存。最安全的做法是设置为1。设置为N时，每N次事务提交则Binlog写文件并刷盘，可能丢失N次事务的数据。'
    },
    // GTID相关参数
    'gtid_mode': {
        suggestion: () => 'ON',
        explanation: '是否启用全局事务标识符模式。'
    },
    'enforce_gtid_consistency': {
        suggestion: () => '1',
        explanation: '强制GTID一致性。'
    },
    'binlog_gtid_simple_recovery': {
        suggestion: () => '1',
        explanation: '简化基于GTID的二进制日志恢复。'
    },
    // ENGINE相关参数
    'innodb_buffer_pool_size': {
        suggestion: (memory) => '建议配置:4GB->2G；8GB->4GB；16GB->9GB；32GB->19GB；64GB->38GB；128GB->76GB；256GB->153GB；512GB->307GB',
        explanation: 'InnoDB缓冲池大小，最小值设置为1G。'
    },
    'innodb_buffer_pool_instances': {
        suggestion: (cpu) => '8',
        explanation: 'InnoDB缓冲池实例数。将innodb_buffer_pool_size大于1 GB的缓冲池拆分成多个实例，每个实例独立管理，支持并发读写。'
    },
    'innodb_io_capacity': {
        suggestion: () =>  '8000 或者 2000',
        explanation: '物理机基线8000；虚拟机基线2000。InnoDB后台任务每秒可用的I/O操作数。'
    },
    'innodb_io_capacity_max': {
        suggestion: () =>  '16000 或者 4000',
        explanation: 'InnoDB后台任务在刷新活动落后时的最大IOPS。一般设置为innodb_io_capacity参数的2倍。'
    },
    'default_storage_engine': {
        suggestion: () => 'InnoDB',
        explanation: '默认的存储引擎。'
    },
    'innodb_data_file_path': {
        suggestion: () => 'ibdata1:12M:autoextend',
        explanation: 'InnoDB系统表空间数据文件路径和配置。'
    },
    'innodb_file_per_table': {
        suggestion: () => '1',
        explanation: '是否为每个表创建独立的表空间，推荐设置为1。'
    },
    'innodb_flush_log_at_trx_commit': {
        suggestion: () => '1',
        explanation: '推荐设置为1，事务提交时，把事务日志从缓存区写到日志文件中，并且立刻写入到磁盘上，最安全的做法是设置为1。设置为2时，事务提交时，把事务日志从缓存区写到日志文件中，但不一定立刻写入到磁盘上。日志文件会每秒写入到磁盘，如果写入前系统崩溃，就会导致最后1秒的日志丢失。'
    },
    'innodb_flush_method': {
        suggestion: () => 'O_DIRECT',
        explanation: 'InnoDB刷新日志到磁盘的方法。'
    },
    'innodb_log_buffer_size': {
        suggestion: () => '256M',
        explanation: 'InnoDB日志缓冲区大小。'
    },
    'innodb_log_file_size': {
        suggestion: () => '2G',
        explanation: 'InnoDB日志文件大小。较大的日志文件减少缓冲池中的检查点刷新活动，节省磁盘I/O，但会使崩溃恢复变慢。'
    },
    'innodb_log_files_in_group': {
        suggestion: () => '2',
        explanation: 'InnoDB日志组中的文件数量。'
    },
    'innodb_max_dirty_pages_pct': {
        suggestion: () => '60',
        explanation: 'InnoDB缓冲池中脏页的最大百分比。'
    },
    'innodb_lru_scan_depth': {
        suggestion: () => '1024',
        explanation: '指定页面清理线程在扫描缓冲池的LRU页面链表时的扫描深度，该参数会影响缓冲池的刷脏操作。'
    },
    'innodb_print_all_deadlocks': {
        suggestion: () => '1',
        explanation: '是否打印所有死锁信息。'
    },
    'innodb_stats_on_metadata': {
        suggestion: () => '0',
        explanation: '在元数据操作时是否更新统计信息。'
    },
    'innodb_strict_mode': {
        suggestion: () => '1',
        explanation: '是否启用InnoDB严格模式。'
    },
    'innodb_undo_tablespaces': {
        suggestion: () => '3',
        explanation: 'InnoDB撤销表空间的数量。'
    },
    'innodb_undo_log_truncate': {
        suggestion: () => '1',
        explanation: '是否截断InnoDB撤销日志。'
    },
    'innodb_max_undo_log_size': {
        suggestion: () => '4G',
        explanation: 'InnoDB撤销日志的最大大小。'
    },
    'innodb_read_io_threads': {
        suggestion: () => '8',
        explanation: 'InnoDB读I/O线程数量。'
    },
    'innodb_write_io_threads': {
        suggestion: () => '8',
        explanation: 'InnoDB写I/O线程数量。'
    },
    'innodb_purge_threads': {
        suggestion: () => '8',
        explanation: '用于InnoDB清理undo记录的后台线程数。增加该值将创建额外的清理线程，可以提升undo清理的效率，防止undo日志占用过多空间，从而间接影响在多个表上执行DML操作的系统性能。'
    },
    'innodb_buffer_pool_load_at_startup': {
        suggestion: () => '1',
        explanation: '启动时是否加载InnoDB缓冲池。'
    },
    'innodb_buffer_pool_dump_at_shutdown': {
        suggestion: () => '1',
        explanation: '关闭时是否转储InnoDB缓冲池。'
    },
    'innodb_buffer_pool_dump_pct': {
        suggestion: () => '25',
        explanation: '关闭时转储InnoDB缓冲池的百分比。'
    },
    'innodb_sort_buffer_size': {
        suggestion: () => '8M',
        explanation: 'InnoDB排序缓冲区大小。'
    },
    'innodb_page_cleaners': {
        suggestion: () => '4',
        explanation: '定义页面清理线程数量，默认值为4，超过缓冲池实例数量时自动调整为与缓冲池实例数量相同。'
    },
    'innodb_sync_array_size': {
        suggestion: () => '128',
        explanation: '定义互斥锁/锁等待数组的大小。增加该值可以提高具有大量等待线程的工作负载的并发性。该值必须在MySQL实例启动时配置，之后不能更改。对于经常产生大量等待线程（通常大于768）的工作负载，建议增加该值。'
    },
    'innodb_lock_wait_timeout': {
        suggestion: () => '10',
        explanation: 'InnoDB事务在放弃获取行锁之前需要等待的时间，单位为秒。'
    },
    'innodb_flush_neighbors': {
        suggestion: () => '0',
        explanation: 'InnoDB刷新相邻页的策略。0表示同簇的其他脏页不会被刷新。适合的场景是SSD盘。'
    },
    'innodb_thread_concurrency': {
        suggestion: () => '8，可自定义。基线为本机CPU核数',
        explanation: 'InnoDB内部允许使用的最大线程数。值为0表示无并发限制。running超过此设置时，可从 show engine innodb status 中看到 排队现象。'
    },
    'innodb_stats_persistent_sample_pages': {
        suggestion: () => '64',
        explanation: 'InnoDB统计信息持久化样本页数。'
    },
    'innodb_autoinc_lock_mode': {
        suggestion: () => '2',
        explanation: '用于控制自增主键的锁机制。可以避免auto_inc的死锁，并提升INSERT … SELECT的性能。'
    },
    'innodb_online_alter_log_max_size': {
        suggestion: () => '1G',
        explanation: 'InnoDB在线变更日志的最大大小。'
    },
    'innodb_open_files': {
        suggestion: () => '2048',
        explanation: '该参数指定InnoDB能够同时打开的最大文件句柄数。如该值设置较小，可能会出现[InnoDB] Open files * exceeds the limit 错误，影响实例性能。'
    },
    'innodb_temp_data_file_path': {
        suggestion: () => 'ibtmp1:12M:autoextend:max:50G',
        explanation: 'InnoDB临时数据文件路径和配置。'
    },
    'innodb_rollback_segments': {
        suggestion: () => '128',
        explanation: 'InnoDB回滚段数量。'
    },
    'innodb_numa_interleave': {
        suggestion: () => '1',
        explanation: '是否启用InnoDB的NUMA交错。'
    },
    'binlog_transaction_dependency_history_size': {
        suggestion: () => '500000',
        explanation: '控制内存中保存的事务信息Hash条目的上限，达到限制后会清空所有信息，不会直接影响正在进行的事务。设置过小会影响备库并行回放的并发度，导致复制延迟。'
    },
    'binlog_transaction_dependency_tracking': {
        suggestion: () => 'WRITESET',
        explanation: 'MySQL的控制并行复制的方法，设置为WRITESET可以检测事务间行级别的冲突，从而在备库实现更快的并行回放。'
    },
    'innodb_max_dirty_pages_pct_lwm': {
        suggestion: () => '10',
        explanation: '脏页高于该百分比时启动刷脏操作。设置此参数为0，意味着禁止预刷脏，应该始终低于innodb_max_dirty_pages_pct的值。'
    },
    'eq_range_index_dive_limit': {
        suggestion: () => '100',
        explanation: '当查询中的等值范围数大于等于该值时，优化器使用统计信息计算执行计划；否则，使用index dive方式采样统计信息。'
    },
    // CACHE相关参数
    'tmp_table_size': {
        suggestion: () => '32M',
        explanation: '该参数用于设定每个线程分配的内部内存临时表的最大值，实际限制由tmp_table_size和max_heap_table_size中的较小值决定。超出限制时，MySQL会自动将其转化为基于磁盘的表（在MySQL 8.0中为InnoDB表）。优化查询时应尽量避免使用临时表，若无法避免，应保证临时表在内存中。'
    },
    'thread_stack': {
        suggestion: () => '262144',
        explanation: '默认值256KB。每个线程的堆栈大小。默认值足够大，可以进行正常操作。如果线程堆栈大小太小，会限制服务器可以处理的 SQL 语句的复杂性、存储过程的递归深度以及其他消耗内存的操作。'
    },
    'net_buffer_length': {
        suggestion: () => '16384',
        explanation: '每个客户端线程与连接缓冲区和结果缓冲区相关联。两者都以net_buffer_length给出的大小开头，但动态放大至max_allowed_packet字节。在每个SQL语句之后，结果缓冲区将收缩到net_buffer_length。'
    },
    'max_connections': {
        suggestion: () => '2000',
        explanation: '最大连接数。'
    },
    'thread_cache_size': {
        suggestion: () => '1024',
        explanation: '线程缓存大小。'
    },
    'thread_handling': {
        suggestion: () => 'one-thread-per-connection',
        explanation: '服务器为每个客户端连接使用一个线程。'
    },
    'open_files_limit': {
        suggestion: () => '65535',
        explanation: '打开文件的最大限制。该参数用于控制MySQL实例能够同时打开使用的文件句柄数，同时会影响innodb_open_files参数配置。'
    },
    'binlog_cache_size': {
        suggestion: () => '1M',
        explanation: '二进制日志缓存大小。'
    },
    'query_cache_size': {
        suggestion: () => '0',
        explanation: '建议禁用,查询缓存是从MySQL 5.7.20处弃用的，并在MySQL 8.0中删除。如果开启query cache，查询时会先检查缓存，命中则返回缓存结果，未命中则正常执行查询并将结果存入缓存。任何对表的写操作（如INSERT、UPDATE、DELETE等）或结构变化都会使与该表相关的query cache失效，增加系统负担。因此，query cache适用于更新不频繁的数据库，但在频繁写入的情况下可能导致锁冲突，降低查询效率。'
    },
    'query_cache_type': {
        suggestion: () => '0',
        explanation: '建议禁用,默认值OFF。'
    },
    'key_buffer_size': {
        suggestion: () => '8388608',
        explanation: '默认值通常为 8MB，用于缓存 MyISAM 表的索引块，从而提高索引读取的效率。'
    },
    'join_buffer_size': {
        suggestion: () => '4M',
        explanation: '连接缓冲区大小。'
    },
    'sort_buffer_size': {
        suggestion: () => '4M',
        explanation: '排序缓冲区大小。'
    },
    'read_buffer_size': {
        suggestion: () => '4M',
        explanation: '读缓冲区大小。'
    },
    'read_rnd_buffer_size': {
        suggestion: () => '256K',
        explanation: '随机读缓冲区大小。'
    },
    'table_definition_cache': {
        suggestion: () => '1024',
        explanation: '表定义缓存大小。'
    },
    'max_heap_table_size': {
        suggestion: () => '32M',
        explanation: '内存表最大大小。'
    },
    'table_open_cache': {
        suggestion: () => '2048',
        explanation: '表打开缓存大小。表缓存的数量。用于将表加载到缓存中，实现快速访问。值过小可能导致高并发时SQL性能问题，值过大可能消耗大量内存。'
    },
    'table_open_cache_instances': {
        suggestion: () => '8',
        explanation: '表打开缓存实例数。将打开的表缓存划分为几个大小为table_open_cache / table_open_cache_instances的较小缓存实例，减少会话（Session）间表缓存的争用。'
    },
    // SLOW LOG相关参数
    'slow_query_log_file': {
        suggestion: () =>'mysql-slow.log',
        explanation: '慢查询日志文件路径。默认路径是datadir下的mysql-slow.log'
    },
    'slow_query_log': {
        suggestion: () => '1',
        explanation: '是否启用慢查询日志。'
    },
    'log_slow_admin_statements': {
        suggestion: () => '1',
        explanation: '是否记录慢管理语句。'
    },
    'log_slow_slave_statements': {
        suggestion: () => '1',
        explanation: '是否记录从库的慢语句。'
    },
    'long_query_time': {
        suggestion: () => '1',
        explanation: '定义慢查询的时间阈值（秒）。'
    },
    'log_queries_not_using_indexes': {
        suggestion: () => 'OFF',
        explanation: '会扫描到所有行的查询将被记录。简单理解为没有使用到索引的查询。建立设置为OFF,防止记录到监控语句。'
    },
    // SEMISYNC相关参数
    'plugin_load': {
        suggestion: () => 'rpl_semi_sync_master=semisync_master.so;rpl_semi_sync_slave=semisync_slave.so',
        explanation: '加载半同步复制相关插件。'
    },
    'rpl_semi_sync_master_enabled': {
        suggestion: () => '1',
        explanation: '是否启用主库的半同步复制。'
    },
    'rpl_semi_sync_slave_enabled': {
        suggestion: () => '1',
        explanation: '是否启用从库的半同步复制。'
    },
    'rpl_semi_sync_master_wait_for_slave_count': {
        suggestion: () => '1',
        explanation: '主库等待确认的从库数量。最小值和默认值都是1。该值越小，性能越好。'
    },
    'rpl_semi_sync_master_wait_no_slave': {
        suggestion: () => 'ON',
        explanation: '主库将在等待rpl_semi_sync_master_timeout超时后才切换到异步复制模式。存在等待过程，如果 `rpl_semi_sync_master_wait_for_slave_count` 值很高，表示需要等待更多的半同步从库，这将影响性能。总结：ON 降异步会慢一些，OFF 就不安全了。'
    },
    'rpl_semi_sync_master_timeout': {
        suggestion: () => '10000',
        explanation: '主库等待从库确认的超时时间（毫秒）。默认值为10000毫秒，10s。'
    },
    // CLIENT_DEPRECATE_EOF相关参数
    'session_track_schema': {
        suggestion: () => '1',
        explanation: '是否跟踪会话的模式信息。'
    },
    'session_track_state_change': {
        suggestion: () => '1',
        explanation: '是否跟踪会话状态变化。'
    },
    'session_track_system_variables': {
        suggestion: () => '*',
        explanation: '跟踪的系统变量。'
    },
    // MISC相关参数
    'log_timestamps': {
        suggestion: () => 'SYSTEM',
        explanation: '日志时间戳的格式。'
    },
    'lower_case_table_names': {
        suggestion: () => '1',
        explanation: '表名大小写敏感设置（1表示不敏感）。'
    },
    'max_allowed_packet': {
        suggestion: () => '256M',
        explanation: '允许的最大数据包大小。'
    },
    'read_only': {
        suggestion: () => '0',
        explanation: '是否设置为只读模式（0表示可读写）。'
    },
    'skip_external_locking': {
        suggestion: () => '1',
        explanation: '是否跳过外部锁定。'
    },
    'skip_slave_start': {
        suggestion: () => '1',
        explanation: '是否在启动时跳过从库自动启动。'
    },
    'skip_name_resolve': {
        suggestion: () => '1',
        explanation: '是否禁用 DNS 解析，建议设置为1，禁用可提高性能。'
    },
    'socket': {
        suggestion: () => '自定义',
        explanation: '套接字文件路径。如session_track_system_variables。'
    },
    'pid_file': {
        suggestion: () => '自定义',
        explanation: '进程的PID文件路径。如session_track_system_variables'
    },
    'disabled_storage_engines': {
        suggestion: () => 'ARCHIVE,BLACKHOLE,EXAMPLE,FEDERATED,MEMORY,MERGE,NDB',
        explanation: '禁用的存储引擎。'
    },
    'log-output': {
        suggestion: () => 'FILE',
        explanation: '日志输出目标。'
    },
    'character_set_server': {
        suggestion: () => 'utf8mb4',
        explanation: '服务器字符集。'
    },
    'collation_server': {
        suggestion: () => 'utf8mb4_general_ci 或是 utf8mb4_0900_ai_ci',    
        explanation: 'MySQL 5.7基线为utf8mb4_general_ci，MySQL 8.0基线为utf8mb4_0900_ai_ci，用于字符排序和比较。'
    },
    'secure_file_priv': {
        suggestion: () => '""',
        explanation: '限制LOAD DATA, SELECT...OUTFILE等操作的文件路径。'
    },
    'expire_logs_days': {
        suggestion: () => '14',
        explanation: '二进制日志文件过期天数。MySQL8.0中使用binlog_expire_logs_seconds，默认值为30天。'
    },
    'max_connect_errors': {
        suggestion: () => '100000',
        explanation: '最大连接错误数。'
    },
    'interactive_timeout': {
        suggestion: () => '1800',
        explanation: '交互式连接超时时间（秒）。'
    },
    'default_authentication_plugin': {
            suggestion: () => 'mysql_native_password 或是 caching_sha2_password',
            explanation: '指定 MySQL 服务器使用的默认认证插件，用于用户连接时的身份验证。MySQL 5.7默认为mysql_native_password，MySQL8.0 默认为caching_sha2_password'
    },
    'loose_rpl_semi_sync_master_enabled': {
            suggestion: () => '1',
            explanation: '是否启用主库的半同步复制功能，1 表示启用。'
    },
    'loose_rpl_semi_sync_slave_enabled': {
            suggestion: () => '1',
            explanation: '是否启用从库的半同步复制功能，1 表示启用。'
    },
    'loose_rpl_semi_sync_master_wait_for_slave_count': {
            suggestion: () => '1',
            explanation: '主库在提交事务前需要等待确认的从库数量。'
    },
    'loose_rpl_semi_sync_master_wait_no_slave': {
            suggestion: () => 'ON',
            explanation: '主库将在等待rpl_semi_sync_master_timeout超时后才切换到异步复制模式。存在等待过程，如果 `rpl_semi_sync_master_wait_for_slave_count` 值很高，表示需要等待更多的半同步从库，这将影响性能。总结：ON 降异步会慢一些，OFF 就不安全了。'
    },
    'loose_rpl_semi_sync_master_timeout': {
            suggestion: () => '10000',
            explanation: '主库等待从库确认事务的超时时间，单位为毫秒。'
    },
    'log_bin_trust_function_creators': {
            suggestion: () => '1',
            explanation: '是否信任二进制日志中存储的自定义函数创建者。1 表示信任，允许在复制环境中使用自定义函数。'
    },
    'slave_parallel_type': {
            suggestion: () => 'LOGICAL_CLOCK',
            explanation: '指定从库并行复制的类型，LOGICAL_CLOCK 表示基于逻辑时钟的并行复制方式。'
    },
    'slave_parallel_workers': {
            suggestion: () => '16，规则如下：cpu核数<=16C，基线为本机的CPU核心数；如果服务器cpu核数>16C，基线值为 16',
            explanation: '从库用于并行复制的工作线程数量。'
    },
    'slave_preserve_commit_order': {
            suggestion: () => '1',
            explanation: '是否保证从库上事务的提交顺序与主库一致，1 表示保证。'
    },
    'performance-schema-instrument': {
            suggestion: () => `'stage/innodb/alter%=ON';'wait/lock/metadata/sql/mdl=ON'`,
            explanation: '用于启用 Performance Schema 中的特定事件或锁的监控。这里启用了 InnoDB 变更阶段和元数据锁的监控。'
    },
    'performance-schema-consumer-events_stages_current': {
            suggestion: () => 'ON',
            explanation: '是否启用 Performance Schema 中当前事件阶段的消费者，ON 表示启用。'
    },
    'performance-schema-consumer-events_stages_history': {
            suggestion: () => 'ON',
            explanation: '是否启用 Performance Schema 中事件阶段历史记录的消费者，ON 表示启用。'
    },
    'performance-schema-consumer-events_stages_history_long': {
            suggestion: () => 'ON',
            explanation: '是否启用 Performance Schema 中长事件阶段历史记录的消费者，ON 表示启用。'
    },
    'skip-ssl': {
            suggestion: () => '1',
            explanation: '是否跳过 SSL 加密连接，省略该参数或设置为 1 表示不使用 SSL 连接。'
    },
    'activate_all_roles_on_login': {
            suggestion: () => '1',
            explanation: '用户登录时是否激活所有授予的角色，1 表示激活。只适用MySQL8.0，基于角色管理用户权限。'
    },
    'innodb_ddl_buffer_size': {
            suggestion: () => '20M',
            explanation: 'InnoDB 用于执行数据定义语言（DDL）操作的缓冲区大小。[MySQL 8.0.41版本修复该问题]增大此参数大原因：在 MySQL 8.0.27 版本中新增并行DDL功能后，在INPLACE模式的DDL操作中重建主键索引时，因错误处理会略过部分记录，导致数据丢失。场景1：ALTER TABLE ENGINE=INNODB 重整表空间操作，需要重建主键索引。场景2：ALTER TABLE ADD NEW-COL ...，ALGORITHM=INPLACE，新增列（删除列）操作，因指定了INPLACE模式，需要重建主键索引。'
    },
    'innodb_adaptive_hash_index': {
        suggestion: () => 'OFF',
        explanation: '自适应哈希索引可以根据您提供的查询条件加速定位到叶子节点，减少IO次数。但是开启此参数是否提升性能取决于业务SQL，但部分操作（如DDL）可能引发哈希索引更新，导致SQL阻塞或性能下降。'
    },
    'transaction_isolation': {
            suggestion: () => 'READ-COMMITTED',
            explanation: '设置事务的隔离级别，READ-COMMITTED 表示读已提交。'
    },
    'wait_timeout': {
            suggestion: () => '1800',
            explanation: '非交互式连接在空闲指定秒数后自动关闭的时间。'
    },
    'net_write_timeout': {
        suggestion: () => '60',
        explanation: '等待将一个block发送给客户端的超时时间。默认值为60秒。建议在网络条件较差或客户端处理每个block耗时较长时，增加该参数的大小，以避免连接中断。'
    },
    'binlog_row_image': {
        suggestion: () => 'full',
        explanation: '默认值full，在前映像和后映像中记录所有列，在binlog中记录所有列的变更情况。'
    },
    'time_zone': {
        suggestion: () => 'SYSTEM',
        explanation: '当前时区。用于初始化每个连接的客户端的时区。'
    },
    'system_time_zone': {
        suggestion: () => 'CST',
        explanation: '服务器的系统时区。当服务器开始执行时，它从机器默认值继承了时区设置。请按照服务器所在时区进行设置。'
    }

};

// 获取输入框和按钮元素
const parameterInput = document.getElementById('parameter');
const queryButton = document.getElementById('queryButton');

// 监听输入框的 keydown 事件
parameterInput.addEventListener('keydown', function(event) {
    // 检查是否按下回车键（Enter 键的 keyCode 为 13）
    if (event.keyCode === 13) {
        // 触发查询功能
        generateSuggestion();
    }
});
function generateSuggestion() {
    const parameter = document.getElementById('parameter').value.trim();
    const suggestionsDiv = document.getElementById('suggestions'); // 获取模糊匹配列表的 DOM 元素

    if (!parameter) {
        document.getElementById('result').innerHTML = '<p>请输入参数。</p>';
        return;
    }

    let results = [];
    const regex = new RegExp(parameter, 'i');
    for (let key in mysqlParams) {
        if (regex.test(key)) {
            results.push({
                name: key,
                suggestion: mysqlParams[key].suggestion(),
                explanation: mysqlParams[key].explanation
            });
        }
    }

    let resultHTML = '';
    if (results.length > 0) {
        results.forEach(result => {
            resultHTML += `
                <h3>参数: ${result.name}</h3>
                <p>${result.suggestion}</p>
                <p>说明: ${result.explanation}</p>
                <p>官方文档: <a href="https://dev.mysql.com/doc/refman/8.0/en/server-system-variable-reference.html" target="_blank">查看详情</a></p>
                <hr>
            `;
        });
    } else {
        resultHTML = `
            <p>未找到匹配的参数。请尝试其他关键词。</p>
            <p>参数名称，可通过官方文档确认。官方文档: <a href="https://dev.mysql.com/doc/refman/8.0/en/server-system-variable-reference.html" target="_blank">查看详情</a></p>
        `;
    }

    document.getElementById('result').innerHTML = resultHTML;
    suggestionsDiv.style.display = 'none'; // 隐藏模糊匹配列表
}
function displayParamList() {
    const paramListDiv = document.getElementById('paramList');

    // 定义参数分组
    const paramGroups = {
        '基础参数': ['basedir', 'datadir', 'port', 'innodb_buffer_pool_size', 'max_connections', 'transaction_isolation', 'character_set_server', 'skip_name_resolve', 'lower_case_table_names', 'log_bin', 'log_error', 'slow_query_log_file', 'relay_log', 'binlog_format', 'innodb_file_per_table'],
        '核心参数': ['server_id', 'sync_binlog', 'innodb_flush_log_at_trx_commit', 'innodb_io_capacity', 'relay_log_info_repository', 'master_info_repository', 'relay_log_recovery', 'binlog_rows_query_log_events'],
        '复制参数': ['gtid_mode', 'enforce_gtid_consistency', 'skip_slave_start', 'slave_parallel_type', 'slave_parallel_workers', 'slave_preserve_commit_order', 'expire_logs_days', 'log_slave_updates', 'relay_log', 'plugin_load', 'loose_rpl_semi_sync_master_enabled', 'loose_rpl_semi_sync_slave_enabled', 'loose_rpl_semi_sync_master_wait_for_slave_count', 'loose_rpl_semi_sync_master_wait_no_slave', 'loose_rpl_semi_sync_master_timeout'],
        '内存的全局参数': ['innodb_buffer_pool_size', 'query_cache_size', 'key_buffer_size', 'innodb_log_buffer_size', 'table_open_cache'],
        '内存的会话参数': ['thread_stack', 'sort_buffer_size', 'join_buffer_size', 'read_buffer_size', 'read_rnd_buffer_size', 'tmp_table_size', 'max_heap_table_size', 'net_buffer_length', 'max_allowed_packet', 'thread_cache_size', 'table_open_cache', 'table_definition_cache', 'binlog_cache_size'],
        '慢查询日志': ['slow_query_log', 'slow_query_log_file', 'log_slow_admin_statements', 'log_slow_slave_statements', 'long_query_time'],
        'InnoDB引擎': Object.keys(mysqlParams).filter(key => key.startsWith('innodb')),
        '二进制日志': ['log_bin', 'binlog_error_action', 'binlog_format', 'binlog_rows_query_log_events', 'log_slave_updates', 'max_binlog_size', 'sync_binlog', 'binlog_cache_size', 'expire_logs_days', 'log_bin_trust_function_creators']
    };

    // 定义参数分组的显示顺序
    const displayOrder = ['基础参数', '核心参数', '二进制日志', '复制参数', '慢查询日志', '内存的会话参数', '内存的全局参数', 'InnoDB引擎'];

    // 按照显示顺序遍历分组
    displayOrder.forEach(groupName => {
        if (paramGroups.hasOwnProperty(groupName)) {
            // 创建分组卡片
            const cardDiv = document.createElement('div');
            cardDiv.className = 'param-card';

            // 创建分组标题
            const groupTitle = document.createElement('h2');
            groupTitle.textContent = groupName;
            cardDiv.appendChild(groupTitle);

            // 创建参数列表
            const paramList = document.createElement('ul');

            // 获取当前分组的参数列表
            const params = paramGroups[groupName];

            // 按参数名称长度排序
            params.sort((a, b) => a.length - b.length);

            // 遍历参数列表
            params.forEach(key => {
                if (mysqlParams.hasOwnProperty(key)) {
                    const paramItem = document.createElement('li');
                    paramItem.textContent = key;
                    // 保持原来的点击查询功能
                    paramItem.onclick = function () {
                        document.getElementById('parameter').value = key;
                        generateSuggestion();
                    };
                    paramList.appendChild(paramItem);
                }
            });

            cardDiv.appendChild(paramList);
            paramListDiv.appendChild(cardDiv);
        }
    });
}
function showSuggestions() {
    const input = document.getElementById('parameter');
    const suggestionsDiv = document.getElementById('suggestions');
    const filter = input.value.trim();

    if (!filter) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    let suggestions = '';
    for (let key in mysqlParams) {
        if (key.toLowerCase().includes(filter.toLowerCase())) {
            suggestions += `<div onclick="selectSuggestion('${key}')">${key}</div>`;
        }
    }

    if (suggestions) {
        suggestionsDiv.innerHTML = suggestions;
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

function selectSuggestion(suggestion) {
    document.getElementById('parameter').value = suggestion;
    document.getElementById('suggestions').style.display = 'none';
    generateSuggestion();
}

window.onload = displayParamList;
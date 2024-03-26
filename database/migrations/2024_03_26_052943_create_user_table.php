<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username',50)->unique();
            $table->string('full_name',50);
            $table->string('email',50)->unique();
            $table->string('password',50);
            $table->string('no_hp',50);
            $table->date('tgl_lahir');
            $table->string('profile_pict');
            $table->bigInteger('saldo');
            $table->integer('poin');
            $table->bigInteger('total_transaksi');
            $table->string('provinsi',25);
            $table->string('kabupate_kota',50);
            $table->string('kecamatan',25);
            $table->string('kelurahan',25);
            $table->longText('detail');
            $table->decimal('latitude',10,7);
            $table->decimal('longitude',10,7);
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        Schema::create('mitras', function (Blueprint $table) {
            $table->id();
            $table->string('nama_mitra',50)->unique();
            $table->string('email',50)->unique();
            $table->string('password',50);
            $table->string('no_hp',50);
            $table->string('brand_logo');
            $table->string('layanan',50);
            $table->bigInteger('saldo');
            $table->integer('poin');
            $table->string('foto_tempat');
            $table->string('alamat',50);
            $table->decimal('latitude',10,7);
            $table->decimal('longitude',10,7);
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        Schema::create('inbox', function (Blueprint $table) {
            $table->id();
            $table->longText('content');
            $table->string('jenis');
            $table->string('read_status');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('judul',50);
            $table->string('icon');
            $table->string('jenis_sampah',25);
            $table->string('kabupate_kota',50);
            $table->integer('berat');
            $table->string('jenis_transaksi');
            $table->bigInteger('saldo');
            $table->longText('deskripsi');
            $table->string('metode_bayar');
            $table->string('status',10);
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('mitra_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('mitra_id')->references('id')->on('mitras');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
        Schema::dropIfExists('inbox');
        Schema::dropIfExists('users');
        Schema::dropIfExists('mitras');
    }
};
